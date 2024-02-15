/** @type {import('next').NextConfig} */
// const path = require("node:path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "103.130.212.245",
      "76b9-2402-800-62f8-2bc4-e1cf-aac7-fe13-46a7.ngrok-free.app",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.alias.canvas = false;
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };
    // config.plugins.push(
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: cMapsDir,
    //         to: 'cmaps/'
    //       },
    //     ],
    //   })
    // );
    return config;
  },
};

module.exports = nextConfig;
