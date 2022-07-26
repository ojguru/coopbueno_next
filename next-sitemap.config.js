// /** @type {import('next-sitemap').IConfig} */
// const config = {
//   siteUrl: process.env.SITE_URL || "http://localhost:3000",
//   generateRobotsTxt: true, // (optional)
//   // ...other options
// };

// export default config;

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  generateRobotsTxt: true, // (optional)
};
