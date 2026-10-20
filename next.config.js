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
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
