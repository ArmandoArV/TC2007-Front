/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["laventa-bucket.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
