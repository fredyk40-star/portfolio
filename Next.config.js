/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We removed "output: 'export'" because Netlify doesn't need it!
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig