/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hello-world-careers',
  assetPrefix: '/hello-world-careers/',
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
