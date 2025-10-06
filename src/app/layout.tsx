// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="p-4 bg-gray-100 border-b">
          <nav className="flex gap-4">
            <Link href="/">トップへ戻る</Link>
            <Link href="/blog">ブログ一覧へ</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-100 border-t mt-8 text-center">
          © 2025 My Blog
        </footer>
      </body>
    </html>
  );
}
