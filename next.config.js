/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["drive.google.com"],
	},
	async redirects() {
		return [
			{
				source: "/db",
				destination:
					"https://docs.google.com/spreadsheets/d/1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew/edit#gid=0",
				permanent: false,
				basePath: false,
			},
		];
	},
};

module.exports = nextConfig;
