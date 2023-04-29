const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			orange: {
				100: '#ffe7cc',
				200: '#ffcf99',
				300: '#ffb766',
				400: '#ff9f33',
				500: '#ff8700',
				600: '#cc6c00',
				700: '#995100',
				800: '#663600',
				900: '#331b00',
			},
			gray: {
				100: '#f2f2f2',
				200: '#e6e6e6',
				300: '#cccccc',
				400: '#b3b3b3',
				500: '#999999',
				600: '#7f7f7f',
				700: '#666666',
				800: '#4c4c4c',
				900: '#333333',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-montserrat)', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
