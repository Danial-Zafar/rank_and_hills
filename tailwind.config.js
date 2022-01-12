// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'home-1': "url('assets/img/beach-work.jpg')",
        'home-2': "url('assets/img/circle.svg')"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brand: {
          black: '#121212',
          DEFAULT: '#4d5858',
          dark: '#2b2b2b',
          orange: '#ff5100',
          background: '#1a1a1a',
          thumb: '#a6a6a6',
          scroll: '#2d2d2d',
          contact: '#333333',
          footer: '#656565',
          marker: '#bdbdbd',
        }
      },
      fontFamily: {
        sans: ['OpenSans', ...defaultTheme.fontFamily.sans],
        serif: ['Cormorant-Garamond', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
