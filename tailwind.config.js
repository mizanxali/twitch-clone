module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: '#E91916',
      purple: '#A970FF',
      white: '#fff',
      gray: {
        darkest: '#0f0f10',
        darker: '#18181b',
        dark: '#19191a',
        light: '#1f1f23',
        lighter: '#3a3b3c',
        lightest: '#464748',
        mute: '#BEBEBE'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    fontSize: {
      '3xs': '0.675rem',
      '2xs': '.775rem',
      'xs': '0.8rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
