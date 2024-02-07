/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "103.130.212.245",
      "06b3-116-96-77-72.ngrok-free.app",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.alias.canvas = false;
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };
    return config;
  },
};

module.exports = nextConfig;
