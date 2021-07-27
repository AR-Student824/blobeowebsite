module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://top.gg/bot/692857355225923685/invite',
        permanent: true,
      },
    ]
  },
}
