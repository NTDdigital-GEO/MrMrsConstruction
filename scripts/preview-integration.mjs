// Astro integration used ONLY for the client preview on GitHub Pages (PUBLIC_PREVIEW=1).
// Production (Cloudflare Pages) never runs this: the site keeps root-relative URLs and its real robots/_redirects/_headers.
//
// GitHub Pages serves a project site under a sub-path (https://<account>.github.io/<repo>/).
// After the build, every root-relative URL in dist/ ("/services/", "/_astro/x.css", url('/wp-content/...'))
// is prefixed with PREVIEW_BASE, so the pages, CSS, fonts and scripts load from that sub-path.
// The source code stays untouched and root-relative — nothing has to be undone at launch.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

export default function previewIntegration() {
  const base = (process.env.PREVIEW_BASE || '').replace(/\/+$/, ''); // e.g. "/mrandmrscnr-site" or "" (custom domain)
  return {
    name: 'mm-preview',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const notBase = base ? `(?!${esc.slice(1)}/)` : '';
        // attributes: href, src, action, poster, data-*; CSS url(); JS module paths to /_astro/
        const attr = new RegExp(`(\\s(?:href|src|action|poster|data-[\\w-]+)=["'])/(?!/)${notBase}`, 'g');
        const cssUrl = new RegExp(`(url\\(\\s*["']?)/(?!/)${notBase}`, 'g');
        const jsAstro = new RegExp(`(["'\`])/_astro/`, 'g');
        let n = 0;

        if (base) {
          for (const f of await walk(dist)) {
            const ext = path.extname(f);
            if (!['.html', '.css', '.js', '.xml', '.txt'].includes(ext)) continue;
            let s = await fs.readFile(f, 'utf8');
            const before = s;
            if (ext === '.html') s = s.replace(attr, `$1${base}/`).replace(cssUrl, `$1${base}/`);
            if (ext === '.css') s = s.replace(cssUrl, `$1${base}/`);
            if (ext === '.js') s = s.replace(jsAstro, `$1${base}/_astro/`);
            if (s !== before) { await fs.writeFile(f, s); n++; }
          }
        }

        // Keep the preview out of search engines and drop Cloudflare-only files.
        await fs.writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
        await fs.writeFile(path.join(dist, '.nojekyll'), '');
        for (const f of ['_redirects', '_headers', 'sitemap-index.xml', 'sitemap-0.xml']) {
          await fs.rm(path.join(dist, f), { force: true });
        }
        logger.info(`Preview build: base "${base || '/'}", ${n} files rewritten, robots Disallow, GTM off, forms disabled.`);
      },
    },
  };
}
