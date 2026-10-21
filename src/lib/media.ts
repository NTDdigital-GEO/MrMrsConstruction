// All media keeps its original WordPress path so image URLs (and their SEO value) don't change.
// PUBLIC_MEDIA_ORIGIN is resolved in astro.config.mjs: '' when files exist in public/, else the live WP origin.
const ORIGIN = (import.meta.env.PUBLIC_MEDIA_ORIGIN ?? '').replace(/\/$/, '');

/** media('2024/03/x.webp') or media('/wp-content/uploads/2024/03/x.webp') -> full URL */
export function media(path: string): string {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  const p = path.startsWith('/wp-content/') ? path : `/wp-content/uploads/${path.replace(/^\//, '')}`;
  return `${ORIGIN}${p}`;
}

/** Absolute URL for schema / Open Graph (always on the production domain). */
export function absMedia(path: string): string {
  const p = path.startsWith('/wp-content/') ? path : `/wp-content/uploads/${path.replace(/^\//, '')}`;
  return `https://mrandmrscnr.com${p}`;
}
