import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // GitHub PagesではNext.jsデフォルトの画像最適化が使えないため必須
  },
  // リポジトリ名が <username>.github.io ではなく、特定の名前（例: portfolio）の場合は以下のコメントアウトを外してください
  basePath: '/portfolio',
};

export default nextConfig;
