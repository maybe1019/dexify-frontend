/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#C96AE4",
      secondary: "#8B51FE",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
