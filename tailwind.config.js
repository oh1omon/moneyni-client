module.exports = {
	purge: {
		content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	},
	darkMode: false,
	theme: {
		colors: {
			main: {
				dark: '#425C5A',
				light: '#5F7A78',
				yellow: '#FFCEA2',
				yellowLight: 'rgba(255,206,162,0.5)',
				err: '#f87171',
			},
			white: '#ffffff',
		},
		extend: {
			gridTemplateRows: { 11: 'repeat(11, minmax(0, 1fr))' },
			gridRowStart: { 10: '10' },
			borderRadius: { '100px': '100px' },
			width: {
				'1/10': '10%',
				'9/10': '90%',
			},
			height: {
				'screen-4.5/10': '45vh',
				'screen-1/10': '10vh',
				'1/10': '10%',
				'9/10': '90%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
