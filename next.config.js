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
		domains: ["implapi.ifadgroup.com"]
	},
	env:{
		API_BASE_URL:"http://implapi.ifadgroup.com:8000/"
	},
	serverRuntimeConfig:{
		API_BASE_URL:"http://implapi.ifadgroup.com:8000/"
	},
	publicRuntimeConfig:{
		API_BASE_URL:"http://implapi.ifadgroup.com:8000/"
	}

}


  

