/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
      {
        protocol: 'https',
        hostname: 'i.imgflip.com',
      },
    ],
  },
}

