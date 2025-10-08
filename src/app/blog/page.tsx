// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
}

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDir);

  // 動的ルーティング
  // 各Markdownファイルから frontmatter を取得
  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">ブログ一覧</h1>
      <ul className="mt-4 list-disc list-inside">
        {/* mapで動的ルーティングのページを羅列する */}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} <span className="text-gray-500 text-sm">({post.date})</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
