const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: [`'Inter'`, ...defaultTheme.fontFamily.sans],
				inherit: `inherit`
			}
		}
	},

	plugins: []
};

module.exports = config;
