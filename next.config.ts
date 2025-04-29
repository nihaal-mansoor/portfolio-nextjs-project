import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',           // Remove before production
        pathname: '/**',         // Match all paths
      }
    ]
  } 
};

export default nextConfig;
