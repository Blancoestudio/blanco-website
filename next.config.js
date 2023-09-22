/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : '',
  basePath: isProd ? '/blanco-website' : '',
}

module.exports = nextConfig
