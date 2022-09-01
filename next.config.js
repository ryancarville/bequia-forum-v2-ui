/** @type {import('next').NextConfig} */
require('dotenv').config();

const {
  API_ENDPOINT,
  AWS_REGION,
  COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_ID
} = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    domains: ['bequia-forum-ryancarville.vercel.app']
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
  env: {
    API_ENDPOINT,
    COGNITO_CLIENT_ID,
    COGNITO_USER_POOL_ID,
    AWS_REGION
  }
};

module.exports = nextConfig
