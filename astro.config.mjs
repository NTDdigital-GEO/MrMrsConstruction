import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import preview from './scripts/preview-integration.mjs';

// Media strategy: every image/video keeps its original WordPress path (/wp-content/uploads/...).
// After `npm run media` has copied the files into public/wp-content/uploads, they are served locally.
// Until then (e.g. first preview deploys) they are loaded from the live WordPress origin.
if (process.env.PUBLIC_MEDIA_ORIGIN === undefined) {
  process.env.PUBLIC_MEDIA_ORIGIN = fs.existsSync('./public/wp-content/uploads') ? '' : 'https://mrandmrscnr.com';
}

// Pages that must never appear in the XML sitemap.
const NOINDEX = ['/thank-you/', '/free-3d-design-consultation/', '/instagram-bio/'];

export default defineConfig({
  site: 'https://mrandmrscnr.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => page.endsWith(p)),
    }),
    // GitHub Pages client preview only (see .github/workflows/preview-pages.yml).
    ...(process.env.PUBLIC_PREVIEW === '1' ? [preview()] : []),
  ],
});
