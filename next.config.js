/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["fakestoreapi.com", "github.com", "picsum.photos"],
    formats: ["image/avif", "image/webp"],
  }
}

module.exports = nextConfig
