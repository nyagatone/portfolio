import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // GitHub PagesではNext.jsデフォルトの画像最適化が使えないため必須
  },
  // ローカル開発時は '/'、GitHub Actionsでのデプロイ時のみ '/portfolio' になるように設定
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio' : '',
};

export default nextConfig;
