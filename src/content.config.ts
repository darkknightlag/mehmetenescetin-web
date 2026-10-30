import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    coverImage: z.string().optional(),
    category: z.string().default('Genel'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    year: z.string().default('2025 →'),
    badge: z.string().default('Proje'),
    status: z.enum(['Aktif', 'Geliştiriliyor', 'Tamamlandı']).default('Aktif'),
    category: z.string().default('Web & Platform'),
    link: z.string().optional(),
    github: z.string().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(true),
    order: z.number().default(1),
  }),
});

export const collections = { blog, projects };
