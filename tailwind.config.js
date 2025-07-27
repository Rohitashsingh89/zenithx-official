/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1f1f1f',
        'gray-dark': '#191919',
        dark: '#1D2144',
        primary: '#17b3ac',
        yellow: '#FBB040',
        'body-color': '#959CB1',
        purple: {
          DEFAULT: '#611F69',
          light: '#611F69',
          dark: '#4A6CF7',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        'blue-light': {
          50: '#eff6ff',
          500: '#3b82f6',
        },
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: '1rem',
      },

      screens: {
        xs: '450px',
        // => @media (min-width: 450px) { ... }

        sm: '575px',
        // => @media (min-width: 576px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '992px',
        // => @media (min-width: 992px) { ... }

        xl: '1200px',
        // => @media (min-width: 1200px) { ... }

        '2xl': '1400px',
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
