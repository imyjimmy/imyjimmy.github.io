const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ["./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    backgroundColor: theme => ({
      'primary': '#ff2d00',
      'secondary': '#ffed4a',
      'danger': '#e3342f'
    }),
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#FF0000',
        }
      },
      textColor: {
        'primary': '#EDF2F7',
        'secondary': '#E2E8F0',
        'danger': '#E63946',
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
