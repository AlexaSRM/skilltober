module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        BGMain: "#2C291E",
        TextMain: "#F4F0E1",
        TextSub: "#F74700",
      },
      fontFamily: {
        'primary': ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
