const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html',
        '../../components/tailwind/**/*.html',
        './themes/default.json'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
        'xs': '300px',
        ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
