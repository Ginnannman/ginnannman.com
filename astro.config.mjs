import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import remarkGemoji from "remark-gemoji";
import remarkRehype from "remark-rehype/lib";
import remarkGfm from "remark-gfm";
import remarkJaruby from "remark-jaruby";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://ginnannman.com/",
  integrations: [
    // @astrojs/tailwind は削除（Tailwind v4 で deprecated）
    // Tailwind は vite.plugins で読み込む（下記）
    react(),
    sitemap(),
    mdx(),
    compress(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      remarkGemoji,
      remarkGfm,
      remarkJaruby,
      [
        remarkCollapse,
        {
          test: "Table of Contents",
        },
      ],
    ],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow noopener noreferrer"],
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteLabelProperties: "h2",
    },
    // extendDefaultPlugins は Astro v2 で廃止済みのため削除
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
