/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'dummyimage.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
