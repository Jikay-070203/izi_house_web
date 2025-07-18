/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disable image optimization since it's not supported with static exports
    unoptimized: true,
  },
  // Only enable output: 'export' for static pages, not for API routes
  output: process.env.NEXT_PUBLIC_STATIC_EXPORT ? 'export' : undefined,
  // Add basePath if your app is not served from the root
  // basePath: '/your-base-path',
  // Disable webpack cache in production
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
  // Skip API routes during static export
  exportPathMap: async function (defaultPathMap) {
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
      // Filter out API routes
      const { paths } = defaultPathMap;
      const filteredPaths = Object.keys(paths).reduce((acc, path) => {
        if (!path.startsWith('/api/')) {
          acc[path] = paths[path];
        }
        return acc;
      }, {});
      return filteredPaths;
    }
    return defaultPathMap;
  },
  // Disable server components for static export
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;