/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fade: 'fadeInDown .5s ease-in-out 0s 1 normal none running',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
      colors: {
        primary: '#ff4800',
      },
      keyframes: () => ({
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0,-100%,0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateZ(0)',
          },
        },
      }),
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
    },
    plugins: [],
  },
};
