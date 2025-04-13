import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Disable ESLint during builds
   eslint: {
    ignoreDuringBuilds: true,
  },
  // Explicitly enable App Router
 
};

export default nextConfig;
