import { getCollection } from "astro:content";
import generateOgImage from "@utils/generateOgImage";
import type { APIRoute } from "astro";

// Astro v5: APIRoute のエクスポートは大文字。
// v5 ではエンドポイントは必ず Response を返す必要がある（旧 { body } 返却は廃止）。
export const GET: APIRoute = async ({ params }) => {
  const svg = await generateOgImage(params.ogTitle);
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
