import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
