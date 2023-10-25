/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // output: isProd ? 'export' : 'standalone',
  // basePath: '/.',
  basePath: '',
  distDir: '_static',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://www.blanco-brand.com/',
  },
}

module.exports = nextConfig