/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "api.welcome-dmc.com"
      },
      {
        protocol: "https",
        hostname: "api.bluebayit.com"
      }
    ]
  }
};

export default nextConfig;
