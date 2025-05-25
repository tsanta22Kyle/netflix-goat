import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("http://localhost:3000/img/**")],
  },
};

export default nextConfig;
