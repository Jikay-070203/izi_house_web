/** @type {import('next').NextConfig} */
const nextConfig = {
  // Đã bỏ output: 'export' để sử dụng chế độ SSR/SSG
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
    ],
    unoptimized: true,
  },
  // Add these configurations to handle static export with auth routes
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        './node_modules/next-auth/**/*',
      ],
    },
  },
};

export default nextConfig;