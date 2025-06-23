/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'bg-start': '#010101',
				'bg-end': '#232850',
			},
			fontFamily: {
				gotham: ['Gotham', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
