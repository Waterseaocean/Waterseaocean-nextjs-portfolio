// src/app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostProps) {
  // posts ディレクトリから対象ファイルを探す
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // gray-matter でメタデータ + 本文を取得
  const { data, content } = matter(fileContents);

  // remark で Markdown を HTML に変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      {/* MarkdownをHTMLとして埋め込む */}
      <article
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}