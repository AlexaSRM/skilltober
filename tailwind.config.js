module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgMain: "#2B3531",
        textPrimary: "#F4F0E1",
        textSecondary: "#F74700",
      },
      fontFamily: {
        primary: ["Lato"],
      },
    },
  },
  variants: {
    scrollbar: ['rounded','hover'],
      extend: {
      padding: ['hover'],
      overflow: ['hover'],

    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
