import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.menucool.com',
        port: '', 
      },
    ],
  },
};

export default nextConfig;
