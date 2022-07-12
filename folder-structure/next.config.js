/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  // sassOptions: {
  //   outputStyle: "compressed"
  //   // and more options here
  // }
};

module.exports = nextConfig;
