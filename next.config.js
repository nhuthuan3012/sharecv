/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'localhost','103.130.212.245',"9054-2402-800-637d-d65-621e-1aa2-ec2b-bdbd.ngrok-free.app"],
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
