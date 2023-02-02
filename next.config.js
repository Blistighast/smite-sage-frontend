/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webcdn.hirezstudios.com",
      },
    ],
  },
};

module.exports = nextConfig;
