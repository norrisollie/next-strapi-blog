/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/posts/1',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
