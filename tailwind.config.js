/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.fuchsia[500],
        },
        secondary: {
          DEFAULT: '#8b5cf6'
        },
        'text-1': {
          DEFAULT: colors.black,
          dark: colors.white,
        },
        'text-2': {
          DEFAULT: colors.gray[800],
          dark: colors.gray[300],
        },
        'text-3': {
          DEFAULT: colors.gray[700],
          dark: colors.gray[400],
        },
        'bg-1': {
          DEFAULT: '#EDF2F9',
          dark: '#0A1727',
        },
        'bg-2': {
          DEFAULT: colors.white,
          dark: '#121E2D',
        },
        'bg-3': {
          DEFAULT: '#F9FAFD',
          dark: '#162231',
        },
        'bg-4': {
          DEFAULT: '#e5e8ed',
          dark: '#122944',
        },
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
