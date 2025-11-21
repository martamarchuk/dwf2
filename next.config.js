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
  // Force restart marker
  env: {
    NEXT_VERSION: '14.2.18',
  },
}

export default nextConfig
