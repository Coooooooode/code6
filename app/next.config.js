/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  appDir: true,
  images: {
    domains: ['upload.wikimedia.org', 'avatars.dicebear.com'],
  },
}

module.exports = nextConfig
