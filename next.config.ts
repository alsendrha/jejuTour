import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cdn.visitjeju.net",
      },
    ],
  },
};

export default nextConfig;
