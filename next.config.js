/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@images': require('path').resolve(__dirname, 'public/images'),
    };
    return config;
  },
}

module.exports = nextConfig 