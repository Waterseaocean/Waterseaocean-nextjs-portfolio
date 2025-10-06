// src/app/blog/[slug]/page.tsx
interface BlogPostProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params; // awaitが必要になるケースがある

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{params.slug} の記事</h1>
      <p className="mt-4">
        これは <strong>{params.slug}</strong> に関する記事です。
      </p>
    </main>
  );
}
