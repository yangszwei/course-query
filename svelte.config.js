import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
		},
		vite: {
			server: {
				hmr: { clientPort: 443 },
			},
		},
	},
};

export default config;
