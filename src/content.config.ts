import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        externalUrl: z.string().url().optional(),
        canonicalUrl: z.string().url().optional(),
        // Path relative to /public or absolute URL — used for OG image (1200×630 px recommended)
        image: z.string().optional(),
    }),
});

const experiences = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
    schema: z.object({
        companyName: z.string(),
        companyLogo: z.string(),
        productImg: z.string().optional(),
        productTitle: z.string(),
        productSubtitle: z.string(),
        startYear: z.string().optional(),
        endYear: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = { blog, experiences };
