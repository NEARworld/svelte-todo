/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			scale: {
				175: '1.75'
			}
		}
	},
	plugins: [require('daisyui')]
};
