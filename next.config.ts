import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages deployment.
 *
 * GitHub Actions sets `GITHUB_REPOSITORY` to `username/repo`. We use that
 * env var to auto-detect `basePath`/`assetPrefix` so the same code builds
 * correctly at both localhost (no basePath) and `https://user.github.io/cleando/`
 * (basePath = `/cleando`).
 *
 * The basePath is also exposed to client code via `NEXT_PUBLIC_BASE_PATH`
 * so the service worker registration can build the correct SW URL.
 */
const repo = process.env.GITHUB_REPOSITORY || "";
const basePath = repo ? `/${repo.split("/")[1]}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  // Keep Turbopack scoped to this project instead of accidentally detecting a lockfile in the home directory.
  turbopack: { root: process.cwd() },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
