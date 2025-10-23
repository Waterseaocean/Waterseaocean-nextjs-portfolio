// src/app/page.tsx
export default function Home() {
 return (
   <main className="min-h-screen bg-white text-gray-800 p-8">
      <div className="prose max-w-none">
        <h1>Tailwind v3 + Typography のテスト</h1>
        <p>
          これは <strong>Tailwind Typography</strong> が有効かどうかを確認するためのテキストです。
          <a href="#">リンク</a> などの装飾が自動で適用されます。
        </p>
        <ul>
          <li>リストアイテム1</li>
          <li>リストアイテム2</li>
        </ul>
        <h1 className="text-3xl font-bold">私のサイト</h1>
        <p className="mt-4">ここではプログラミング学習の記録を書いています。</p>
        <a href="/blog" className="text-blue-600 underline">ブログを見る</a>
      </div>
    </main>
  )
}
