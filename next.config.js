/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'localhost','103.130.212.245',"0475-2402-800-62f8-2bc4-7a79-f49-5a79-a976.ngrok-free.app"],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        config.resolve.alias.canvas = false;
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
          };
        return config;
    },
}

module.exports = nextConfig
