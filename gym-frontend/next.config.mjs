/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "8000",
          pathname: "/media/**", // Allow all images inside /media/
        },
      ],
    },
  };
  
  

export default nextConfig;
