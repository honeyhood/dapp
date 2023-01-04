/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@lifi/widget'],
  swcMinify: true,
}

module.exports = nextConfig
