module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: '#A970FF',
      white: '#fff',
      gray: {
        darkest: '#0f0f10',
        dark: '#18181b',
        light: '#1f1f23',
        lightest: '#464748',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
