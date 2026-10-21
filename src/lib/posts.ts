import { getCollection } from 'astro:content';
import { LATEST_POSTS_FALLBACK } from '../data/content';

export async function allPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Latest posts for the homepage carousel (falls back to the 8 WordPress posts until migration runs). */
export async function latestPosts(n = 8) {
  const posts = (await allPosts()).filter((p) => !p.data.noindex);
  if (!posts.length) return LATEST_POSTS_FALLBACK.slice(0, n);
  return posts.slice(0, n).map((p) => ({ slug: p.id, title: p.data.title, image: p.data.image ?? '' }));
}
