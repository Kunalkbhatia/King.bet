import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: 'images.chesscomfiles.com'}],
  },
};

export default nextConfig;
