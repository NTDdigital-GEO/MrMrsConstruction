// Blog posts live in src/content/blog/*.md — created by `npm run migrate` from the WordPress REST API.
// Posts keep their WordPress URLs (/{slug}/ at the site root).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default([]),
    noindex: z.boolean().default(false),
    wpId: z.number().optional(),
  }),
});

export const collections = { blog };
