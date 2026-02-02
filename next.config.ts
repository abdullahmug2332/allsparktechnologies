import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "allsparktechnologies.com"],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000", // Allow dev API
        pathname: "/images/**",
      },
       {
        protocol: "https",
        hostname: "allsparktechnologies.com",
        port: "",
        pathname: "/api/images/*",
      },
    ],
  },

}

export default nextConfig;

