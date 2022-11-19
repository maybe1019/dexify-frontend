/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C96AE4',
        secondary: '#8B51FE',
        'text-1': {
          DEFAULT: colors.black,
          dark: colors.white,
        },
        'text-2': {
          DEFAULT: colors.gray[900],
          dark: colors.gray[300],
        },
        'text-3': {
          DEFAULT: colors.gray[800],
          dark: colors.gray[500],
        },
        'bg-1': {
          DEFAULT: colors.white,
          dark: colors.slate[900],
        },
        'bg-2': {
          DEFAULT: colors.gray[200],
          dark: colors.slate[800],
        }
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
