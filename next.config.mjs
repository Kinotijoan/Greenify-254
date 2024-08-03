/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
		serverComponentsExternalPackages: ["@node-rs/argon2"]
	},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.forgerecycling.co.uk',
        port: '',
        pathname: '/blog/**',
      },
      {
        protocol: 'https',
        hostname: 'roguedisposal.com',
        port: '',
        pathname: '/resources/education/**',
      },
    ],
  },
};

export default nextConfig;
