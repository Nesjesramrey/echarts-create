import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Disable ESLint during builds
   eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
