const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 여기에 다른 Next.js 설정을 추가할 수 있습니다.
  // 예: reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1h7waosxik1t4.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**",
      },
    ],
  },
}

module.exports = withVanillaExtract(nextConfig)
