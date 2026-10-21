#!/usr/bin/env node
// Migrate every published WordPress blog post into src/content/blog/{slug}.md
//
//   npm run migrate                         # all posts
//   npm run migrate -- --noindex-landmarks  # also mark the off-topic local-landmark posts noindex (scripts/noindex-posts.json)
//   npm run migrate -- --force              # overwrite files that already exist (default: keep hand-edited files)
//
// Source: WP REST API (open on mrandmrscnr.com). Set WP_ORIGIN to point at a staging copy if needed.
// URLs are preserved: a post at https://mrandmrscnr.com/{slug}/ is rebuilt at /{slug}/.

import fs from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';
import { parseHTML } from 'linkedom';

const WP = (process.env.WP_ORIGIN || 'https://mrandmrscnr.com').replace(/\/$/, '');
const OUT = path.resolve('src/content/blog');
const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');
const NOINDEX = args.has('--noindex-landmarks')
  ? new Set(JSON.parse(await fs.readFile('scripts/noindex-posts.json', 'utf8')).slugs)
  : new Set();

// Slugs used by Astro pages — a post with one of these slugs would collide with a page.
const RESERVED = new Set(['about-us', 'testimonials', 'gallery', 'blog', 'services', 'service-area', 'service-areas', 'get-a-free-quote',
  'refer-a-friend', 'site-map', 'accessibility-statement', 'privacy-policy', 'terms-of-service', 'thank-you', 'instagram-bio',
  'free-3d-design-consultation', 'home-test', 'home-test1']);

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.remove(['script', 'style', 'noscript', 'iframe']);
td.keep(['figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td']);

const decode = (s = '') => {
  const { document } = parseHTML(`<!doctype html><html><body><div id="d">${s}</div></body></html>`);
  return document.getElementById("d").textContent.replace(/\s+/g, " ").trim();
};
const yaml = (s) => JSON.stringify(s ?? '');
const uploadsPath = (url = '') => url.replace(/^https?:\/\/[^/]+\/wp-content\/uploads\//, '');

function cleanHtml(html) {
  const { document } = parseHTML(`<!doctype html><html><body><div id="root">${html}</div></body></html>`);
  const root = document.getElementById('root');
  // Absolute links to the same site -> root-relative (works on preview domains and after cutover).
  root.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    if (/^https?:\/\/(www\.)?mrandmrscnr\.com/i.test(href)) a.setAttribute('href', href.replace(/^https?:\/\/(www\.)?mrandmrscnr\.com/i, '') || '/');
  });
  // Images keep their /wp-content/uploads/ path; drop srcset/sizes noise.
  root.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('data-src') || img.getAttribute('src') || '';
    img.setAttribute('src', src.replace(/^https?:\/\/(www\.)?mrandmrscnr\.com/i, ''));
    ['srcset', 'sizes', 'data-src', 'data-srcset', 'class', 'style', 'decoding'].forEach((k) => img.removeAttribute(k));
    if (!img.getAttribute('alt')) img.setAttribute('alt', '');
  });
  // Unwrap Elementor/Gutenberg wrapper divs and spans.
  root.querySelectorAll('div, span, section').forEach((el) => el.replaceWith(...el.childNodes));
  return root.innerHTML;
}

async function getJson(url) {
  const r = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return { data: await r.json(), pages: Number(r.headers.get('x-wp-totalpages') || 1) };
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const posts = [];
  let page = 1, total = 1;
  do {
    const { data, pages } = await getJson(`${WP}/wp-json/wp/v2/posts?status=publish&per_page=100&page=${page}&_embed=1`);
    posts.push(...data);
    total = pages;
    page += 1;
  } while (page <= total);

  let written = 0, skipped = 0;
  for (const p of posts) {
    const slug = p.slug;
    if (RESERVED.has(slug)) { console.warn(`! skipped ${slug}: collides with a page`); skipped++; continue; }
    const file = path.join(OUT, `${slug}.md`);
    if (!FORCE) {
      try { await fs.access(file); skipped++; continue; } catch {}
    }
    const media = p._embedded?.['wp:featuredmedia']?.[0];
    const cats = (p._embedded?.['wp:term']?.[0] || []).map((t) => decode(t.name)).filter((n) => n && n !== 'Uncategorized');
    const excerpt = decode(p.excerpt?.rendered || '').replace(/\s*\[…\]|\s*\[&hellip;\]/g, '').slice(0, 300);
    const body = td.turndown(cleanHtml(p.content?.rendered || '')).replace(/\n{3,}/g, '\n\n').trim();

    const fm = [
      '---',
      `title: ${yaml(decode(p.title?.rendered))}`,
      `date: ${p.date}`,
      p.modified && p.modified !== p.date ? `updated: ${p.modified}` : null,
      excerpt ? `excerpt: ${yaml(excerpt)}` : null,
      media?.source_url ? `image: ${yaml(uploadsPath(media.source_url))}` : null,
      `categories: ${JSON.stringify(cats)}`,
      NOINDEX.has(slug) ? 'noindex: true' : null,
      `wpId: ${p.id}`,
      '---',
    ].filter(Boolean).join('\n');

    await fs.writeFile(file, `${fm}\n${body}\n`);
    written++;
  }
  console.log(`✓ ${posts.length} posts found · ${written} written · ${skipped} kept/skipped · ${NOINDEX.size ? 'noindex list applied' : 'no noindex list'}`);
  console.log('Next: npm run media   (copies every referenced /wp-content/uploads file into public/)');
}

main().catch((e) => { console.error(e); process.exit(1); });
