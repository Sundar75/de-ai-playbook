/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com'],
  },
  experimental: {
    appDir: false,
  },
};

export default nextConfig; 