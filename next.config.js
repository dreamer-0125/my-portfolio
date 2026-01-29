/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	devIndicators: false,
	images: { unoptimized: true },
	// Empty turbopack config to silence webpack migration warning (Next.js 16 uses Turbopack by default)
	turbopack: {},
};

module.exports = nextConfig;