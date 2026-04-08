/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@clerk/nextjs'] = path.resolve(__dirname, 'mocks/clerk.tsx');
    return config;
  },
  turbopack: {
    resolveAlias: {
      '@clerk/nextjs': './mocks/clerk.tsx',
    },
  },
};

export default nextConfig;
