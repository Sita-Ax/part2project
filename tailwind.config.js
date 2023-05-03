/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./news_styles')], //import more than one in an array
  corePlugins: {
    container: false
  },
  enabled: false, //have it on true when working on it
  content: ['./dist/**/*.html'], //look for files inside of dist folder
  darkMode: 'class', //media depend on your device mode or smartphone or class
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '4rem'
      }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '600'
            },
            h2: {
              fontWeight: '400'
            }
          }
        },
        lg: {
          css: {
            h2: {
              color: 'green'
            }
          }
        }
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      width: ['hover']
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography')
  ]
}
