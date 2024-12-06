/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            desktop: '1280px'
        },
        extend: {
            transitionTimingFunction: {
                'custom-cubic': 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            },
            screens: {
                'desktop': '80em',
                'mobile': '40em'
            },
            gridTemplateColumns: {
                '10-90': '10% 90%',
            }
        },
    },
    plugins: [],
};
