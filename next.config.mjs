/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 Bắt buộc để dùng Cloudflare Pages static
  images: {
    unoptimized: true, // 👈 Bắt buộc nếu dùng <Image> của next/image
  },
};

export default nextConfig;
