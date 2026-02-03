/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  compress: true,        // ✅ Gzip/Brotli
  swcMinify: true,       // ✅ JS minification

  images: {
    formats: ["image/avif", "image/webp"], // ✅ Better image formats
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;