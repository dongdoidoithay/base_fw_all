/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
   key: 'X-XSS-Protection',
   value: '1; mode=block'
 },
 {
   key: 'X-Frame-Options',
   value: 'DENY'
 },
 {
   key: 'Permissions-Policy',
   value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
 },
 {
   key: 'Referrer-Policy',
   value: 'origin-when-cross-origin'
 } 
 ]

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    workerThreads: false,
    concurrentFeatures: false,
    streamingServerRewrite: false,
    turbopack: false,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  }
}

module.exports = nextConfig
