const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'softBlue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        'vdbMain': 'hsl(217, 54%, 11%)',
        'vdbCard': 'hsl(216, 50%, 16%)',
        'vdbLine': 'hsl(215, 32%, 27%)',
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        ':root': {
          fontSize: '18px',
          fontFamily: 'Outfit',
        }
      })
    }),
  ]
}
