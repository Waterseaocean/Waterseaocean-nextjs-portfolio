// src/app/page.tsx
export default function Home() {
 return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">私のサイト</h1>
      <p className="mt-4">ここではプログラミング学習の記録を書いています。</p>
      <a href="/blog" className="text-blue-500 underline">ブログを見る</a>
    </main>
  )
}
