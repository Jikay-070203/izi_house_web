/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {},
  // Add these configurations
  webpack: (config, { isServer, dev }) => {
    // Disable webpack cache in production
    if (!dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
  // Enable static export
  output: 'export',
  // Optional: Add basePath if your app is not served from the root
  // basePath: '/your-base-path',
};

export default nextConfig;