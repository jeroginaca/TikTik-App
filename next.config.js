/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { 
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['t3.ftcdn.net',
      'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
