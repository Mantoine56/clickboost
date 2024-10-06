/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

module.exports = nextConfig;