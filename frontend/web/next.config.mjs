/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Tắt tính năng tạo symlink
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '**/node_modules/**/*',
        '.next/**/*',
      ],
    },
  },

  // Cấu hình images
  images: {
    unoptimized: true,
  },

  // Bỏ qua lỗi TypeScript và ESLint khi build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Cấu hình webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;