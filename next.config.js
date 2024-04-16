/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['moongose']
      },
      images:{
        domains: ['m.media-amazon.com']
      }
}

module.exports = nextConfig
