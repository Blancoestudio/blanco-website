/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  // basePath: isProd ? '/blanco-website' : '',
  images: {
    unoptimized: true,
  },
  // env: {
  //   NEXT_PUBLIC_SITE_URL: 'https://derkysan.github.io/blanco-website/',
  // },
}

module.exports = nextConfig
