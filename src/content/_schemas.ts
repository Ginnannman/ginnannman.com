import { z } from "zod";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    modDatetime: z.date().optional().nullable(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
