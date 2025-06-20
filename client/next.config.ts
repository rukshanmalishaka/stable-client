import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    domains: ['213.180.0.35'],
  },
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '213.180.0.35',
      port: '47909',
      pathname: '/download/**',
    },
  ],
};

export default nextConfig;
