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
    /* Optional cover image — used by /blog-v4 for its 3-column card
       grid and by the [...slug] article template for the in-article
       hero. Path is served-public, e.g.
       `/images/blog/charger-plugs/ev-charging1.png`. */
    image: z.string().optional(),
  }),
});

export const collections = { blog };
