const config = require('./config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark':config.bg_dark,
        'light': config.bg_light,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
