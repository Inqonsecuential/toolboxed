// @ts-check

/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'dummyimage.com'],
    dangerouslyAllowSVG: true,
  },
};

const pwa = withPWA({
  dest: 'public',
  scope: '/',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development',
});

export default pwa(nextConfig);
