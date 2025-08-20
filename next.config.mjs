/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';
const BASE = '/hello-world-careers';

const nextConfig = {
  output: 'export',
  basePath: BASE,
  assetPrefix: `${BASE}/`,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isDev ? '' : BASE,
  },
};

export default nextConfig;
