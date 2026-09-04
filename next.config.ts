import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
