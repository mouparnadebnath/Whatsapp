/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ia601308.us.archive.org',
         
        },
      ],
    },
  
};
export default nextConfig;
