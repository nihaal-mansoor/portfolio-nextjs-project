import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
