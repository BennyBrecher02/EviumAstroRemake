import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['cost-demand', 'market-shifts', 'charging-tech', 'vehicle-efficiency']),
    categoryLabel: z.string(),
    date: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
  }),
});

export const collections = { blog };
