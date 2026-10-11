/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/works',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
