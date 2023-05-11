/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/cv-builder',
        destination: '/products/cv-builder',
      },
      {
        source: '/cv-reviewer',
        destination: '/products/cv-reviewer',
      },
      {
        source: '/linkedin-reviewer',
        destination: '/products/linkedin-reviewer',
      },
    ];
  },
};

module.exports = nextConfig;
