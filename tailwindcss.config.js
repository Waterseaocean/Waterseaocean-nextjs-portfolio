// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // appディレクトリ配下の全てのファイル
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // srcディレクトリ配下の全てのファイル
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // typographyプラグインを有効化
  ],
};
/**
content 配列
ここで指定したファイルの中のクラスだけが Tailwind のビルドに含まれるので、必ず自分のディレクトリ構成に合うように書き換えることができる

plugins 配列
今回は @tailwindcss/typography を使うので追加。
これを入れることで prose クラスを使えるようになる。
*/