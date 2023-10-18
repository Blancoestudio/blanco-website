/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : 'standalone',
  basePath: '/.',
  // output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://blanco-website-rg5jl.ondigitalocean.app/',
  },
}

module.exports = nextConfig