/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pushkar-mhatre.vercel.app',
          },
        ],
        destination: 'https://www.pushkarmhatre.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.vercel\\.app',
          },
        ],
        destination: 'https://www.pushkarmhatre.in/:path*',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/works',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.vercel\\.app',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
