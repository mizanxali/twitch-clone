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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
