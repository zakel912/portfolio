import type { NextConfig } from "next";

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGithubUserSite = githubRepository?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;
const basePath = githubRepository && !isGithubUserSite ? `/${githubRepository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  experimental: {
    useTypeScriptCli: false
  }
};

export default nextConfig;
