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
      },
      {
        source:'/player',
        destination: '/html/player.html'
      },
      {
        source:'/ourPlayer',
        destination: '/html/ourPlayer.html'
      },
      {
        source:'/play',
        destination: '/html/play.html'
      },
    ]
  }
}

module.exports = nextConfig
