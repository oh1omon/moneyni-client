module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false,
    theme: {
        colors: {
            main: {
                dark: '#425C5A',
                light: '#A2BFBD',
                yellow: '#FFCEA2',
                yellowLight: 'rgba(255,206,162,0.5)',
                err: '#f87171',
            },
        },
        extend: {
            borderRadius: { '100px':'100px' },
            width: {
                '1/10': '10%',
                '9/10': '90%',
            },
            height: {
                '1/10': '10%',
                '9/10': '90%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
