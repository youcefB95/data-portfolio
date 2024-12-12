/** @type {import('next').NextConfig} */

import dotenv from "dotenv"; // Utilisation d'import pour dotenv
dotenv.config(); // Charge les variables d'environnement à partir de .env

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/data-portfolio" : "",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
