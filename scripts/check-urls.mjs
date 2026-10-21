#!/usr/bin/env node
// SEO safety check before the DNS cutover: every URL that exists on the WordPress site must either
// be rebuilt in dist/ or be 301-redirected in public/_redirects. Run after `astro build` (npm run build:ci does both).
//
//   node scripts/check-urls.mjs            # check dist/ against scripts/legacy-urls.json
//   node scripts/check-urls.mjs --refresh  # first re-download the URL inventory from the WP REST API

import fs from 'node:fs/promises';
import path from 'node:path';

const WP = (process.env.WP_ORIGIN || 'https://mrandmrscnr.com').replace(/\/$/, '');
const INV = path.resolve('scripts/legacy-urls.json');
const DIST = path.resolve('dist');

async function refresh() {
  const types = { pages: 'pages', services: 'services', 'service-areas': 'service-areas', 'projects-gallery': 'projects-gallery', posts: 'posts' };
  const out = { source: `${WP}/wp-json/wp/v2 (published items)`, generated: new Date().toISOString().slice(0, 10) };
  for (const [key, type] of Object.entries(types)) {
    out[key] = [];
    for (let page = 1; page < 20; page++) {
      const r = await fetch(`${WP}/wp-json/wp/v2/${type}?per_page=100&page=${page}&_fields=link`);
      if (!r.ok) break;
      const items = await r.json();
      out[key].push(...items.map((i) => new URL(i.link).pathname));
      if (items.length < 100) break;
    }
  }
  await fs.writeFile(INV, JSON.stringify(out, null, 1));
  console.log('✓ inventory refreshed');
}

async function redirects() {
  const txt = await fs.readFile(path.resolve('public/_redirects'), 'utf8');
  return txt.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => {
    const [from, to, code] = l.split(/\s+/);
    const re = new RegExp('^' + from.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/:\w+/g, '[^/]+') + '$');
    return { from, to, code, re };
  });
}

async function built(p) {
  const file = p === '/' ? 'index.html' : path.join(p.replace(/^\//, ''), 'index.html');
  try { await fs.access(path.join(DIST, file)); return true; } catch { return false; }
}

async function main() {
  if (process.argv.includes('--refresh')) await refresh();
  const inv = JSON.parse(await fs.readFile(INV, 'utf8'));
  const rules = await redirects();
  const groups = Object.entries(inv).filter(([, v]) => Array.isArray(v));
  let total = 0, missing = [];
  const viaRedirect = [];
  for (const [group, urls] of groups) {
    for (const u of urls) {
      total++;
      if (await built(u)) continue;
      const rule = rules.find((r) => r.re.test(u) || r.re.test(u.replace(/\/$/, '')));
      if (rule) { viaRedirect.push(`${u} → ${rule.to} (${rule.code})`); continue; }
      missing.push(`${group}: ${u}`);
    }
  }
  console.log(`Checked ${total} legacy URLs · ${total - missing.length - viaRedirect.length} rebuilt · ${viaRedirect.length} redirected · ${missing.length} missing`);
  viaRedirect.forEach((r) => console.log('  ↪ ' + r));
  if (missing.length) {
    const posts = missing.filter((m) => m.startsWith('posts:')).length;
    console.error('\n✗ Missing (would 404 after cutover):');
    missing.slice(0, 50).forEach((m) => console.error('  ' + m));
    if (missing.length > 50) console.error(`  …and ${missing.length - 50} more`);
    if (posts) console.error(`\nHint: ${posts} blog posts are missing — run "npm run migrate" first.`);
    process.exit(1);
  }
  console.log('✓ No legacy URL will 404.');
}

main().catch((e) => { console.error(e); process.exit(1); });
