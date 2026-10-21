#!/usr/bin/env node
// Copy every WordPress media file the new site references into public/wp-content/uploads/ (same paths).
//
//   npm run media             # download missing files only
//   npm run media -- --dry    # list what would be downloaded
//
// Scans src/ (data files, pages, blog markdown) for "/wp-content/uploads/..." paths and "2024/01/x.webp"-style
// shorthand used by src/lib/media.ts, plus the hero video. Run it after `npm run migrate`, before the DNS cutover.
// After it finishes, astro.config.mjs automatically serves media locally (PUBLIC_MEDIA_ORIGIN = '').

import fs from 'node:fs/promises';
import path from 'node:path';

const WP = (process.env.WP_ORIGIN || 'https://mrandmrscnr.com').replace(/\/$/, '');
const DEST = path.resolve('public/wp-content/uploads');
const DRY = process.argv.includes('--dry');
const CONCURRENCY = 6;
const EXT = '(?:jpe?g|png|webp|gif|svg|mp4|webm|pdf|avif)';
const FULL = new RegExp(`/wp-content/uploads/([\\w./%-]+?\\.${EXT})`, 'gi');
const SHORT = new RegExp(`['"(](20\\d\\d/\\d\\d/[\\w.%-]+?\\.${EXT})['")]`, 'gi');

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(astro|ts|mjs|js|md|mdx|css|json)$/.test(e.name)) out.push(p);
  }
  return out;
}

async function exists(p) { try { await fs.access(p); return true; } catch { return false; } }

async function main() {
  const files = await walk(path.resolve('src'));
  const set = new Set();
  for (const f of files) {
    const s = await fs.readFile(f, 'utf8');
    for (const m of s.matchAll(FULL)) set.add(decodeURIComponent(m[1]));
    for (const m of s.matchAll(SHORT)) set.add(decodeURIComponent(m[1]));
  }
  const all = [...set].sort();
  const todo = [];
  for (const rel of all) if (!(await exists(path.join(DEST, rel)))) todo.push(rel);
  console.log(`${all.length} media files referenced · ${todo.length} missing locally`);
  if (DRY) { todo.forEach((t) => console.log('  ' + t)); return; }

  let ok = 0, fail = 0, i = 0;
  async function worker() {
    while (i < todo.length) {
      const rel = todo[i++];
      const url = `${WP}/wp-content/uploads/${rel.split('/').map(encodeURIComponent).join('/')}`;
      try {
        const r = await fetch(url);
        if (!r.ok) throw new Error(String(r.status));
        const buf = Buffer.from(await r.arrayBuffer());
        await fs.mkdir(path.dirname(path.join(DEST, rel)), { recursive: true });
        await fs.writeFile(path.join(DEST, rel), buf);
        ok++;
        process.stdout.write(`\r  downloaded ${ok}/${todo.length}`);
      } catch (e) {
        fail++;
        console.warn(`\n! ${rel}: ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\n✓ ${ok} downloaded · ${fail} failed`);
  if (fail) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exit(1); });
