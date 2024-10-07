/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        // pathname: "/",
      },
      {
        protocol: "https",
        hostname: "certificaciones.uaf.gob.do",
      },
      {
        protocol: "https",
        hostname: "coopbueno.netlify.app",
      },
      {
        protocol: "https",
        hostname: "coopbueno.com.do",
      },
      {
        protocol: "https",
        hostname: "app.coopbueno.com.do",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
