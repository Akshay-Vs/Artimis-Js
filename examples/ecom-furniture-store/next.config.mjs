/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'video-previews.elements.envatousercontent.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
