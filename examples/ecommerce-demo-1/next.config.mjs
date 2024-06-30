/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'video-previews.elements.envatousercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;