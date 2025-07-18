// This file is used to enable server-side rendering on Cloudflare Pages
// It will be automatically used by Cloudflare Pages when deploying

import { createRequestHandler } from '@cloudflare/next-on-pages';

export const onRequest = createRequestHandler({
  // Your Next.js build output directory
  buildOutputDir: '.next',
  
  // Optional: Set the path to your Next.js build directory
  // If not specified, it will look for .next in the current directory
  buildId: null, // Auto-detected from .next/BUILD_ID
  
  // Optional: Set to true to enable streaming responses
  stream: true,
  
  // Optional: Customize the request handler
  async getRequestContext(request) {
    return {
      request,
      // Add any additional context you want to pass to your Next.js app
      // This will be available in getServerSideProps, getStaticProps, etc.
      env: {
        // Add any environment variables your app needs
      },
    };
  },
});
