/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'localhost','103.130.212.245',"46ac-103-130-212-245.ngrok-free.app"],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
          };
        return config;
    },
}

module.exports = nextConfig
