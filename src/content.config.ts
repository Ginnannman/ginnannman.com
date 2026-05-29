// Astro v5 では src/content/config.ts から src/content.config.ts に移動
import { defineCollection } from "astro:content";
import { blogSchema } from "./content/_schemas";

const blog = defineCollection({
  type: "content", // Astro v5 で必須
  schema: blogSchema,
});

export const collections = { blog };
