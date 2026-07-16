import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/FORMA17",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
