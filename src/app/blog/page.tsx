import Link from "next/link";

// src/app/blog/page.tsx
export default function BlogPage() {
  // 動的ルーティング
  const posts = [
    { slug: "first", title: "初めての記事" },
    { slug: "nextjs", title: "Next.js勉強メモ" }
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">ブログ一覧</h1>
      <ul className="mt-4 list-disc list-inside">
        {/* mapで動的ルーティングのページを羅列する */}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
