/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Consider enabling optimization if using Vercel
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // output: 'export', // Keep this commented out for SSR
  experimental: {
    // Enable modern JS features
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    // Remove console in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
    // Enable styled-components optimizations if you're using it
    // styledComponents: true,
  },
  // Enable React profiling in production
  productionBrowserSourceMaps: false, // Set to true for debugging production builds
  // Configure webpack for better tree-shaking
  webpack: (config, { isServer }) => {
    // Add module path aliases if needed
    // config.resolve.alias['@'] = path.resolve(__dirname);

    // Only run these optimizations in production
    if (process.env.NODE_ENV === 'production') {
      // Disable source maps in production to reduce bundle size
      if (config.devtool) {
        delete config.devtool;
      }

      // Add more aggressive minification
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        // Ensure Terser is used with production optimizations
        (compiler) => {
          const TerserPlugin = require('terser-webpack-plugin');
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }).apply(compiler);
        },
      ];
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);