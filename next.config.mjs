/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_DOMAIN: process.env.CLIENT_
  }
};

export default nextConfig;
