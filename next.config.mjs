/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hello-world-careers',
  assetPrefix: '/hello-world-careers/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
