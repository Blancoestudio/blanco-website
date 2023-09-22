/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  basePath: isProd ? '/blanco-website' : '',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
