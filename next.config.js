const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
    runtimeCaching
  },
});

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'implcms.ifadgroup.com',
        pathname: '/storage/content-item/**'
      },
      ],
  },

};


  

