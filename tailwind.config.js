const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Teal: colors.teal
      },
      animation: {
        'slow-spin': 'spin 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
