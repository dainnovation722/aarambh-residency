/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH ? "/" + process.env.BASE_PATH : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports = nextConfig;
