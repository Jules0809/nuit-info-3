import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: 'build', // Chemin de sortie
			precompress: false, // Compression gzip/brotli
		}),
	},
};

export default config;

