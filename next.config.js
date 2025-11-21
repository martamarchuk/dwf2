/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'digitalworkforce.one',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

export default nextConfig
