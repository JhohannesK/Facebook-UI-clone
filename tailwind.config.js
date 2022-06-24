module.exports = {
	content: ['./public/**/*.{html, js}'],
	theme: {
		screens: {
			sm: '320px',
			md: '375',
			lg: '600',
		},
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
