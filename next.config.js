/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source:'/',
        destination: '/html/index.html',
      },
      {
        source:'/rule',
        destination: '/html/rule.html'
      }
    ]
  }
}

module.exports = nextConfig
