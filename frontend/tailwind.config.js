import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1F384C',
        secondary: '#273240',
        accent: '#5A6ACF',
        'accent-2': '#A6ABC8',
        'accent-hover': '#4753a2',
        customGray: '#082431',
      },
      backgroundColor: {
        sidebar: '#F1F2F7',
      },
    },
  },
  plugins: ['@tailwindcss/typography', daisyui],
  daisyui: {
    themes: ['fantasy'],
  },
};
