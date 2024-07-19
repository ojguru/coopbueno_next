/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // "[yourapp].wpengine.com" (Update this to be your Wordpress application name in order to load images connected to your posts)
      "localhost",
      "certificaciones.uaf.gob.do",
      "coopbueno.netlify.app",
      "coopbueno.com.do",
      "app.coopbueno.com.do",
      "res.cloudinary.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
