/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      width: {
        'inp-w': "calc((100% / 2) - 20px)"
      }
    },
  },
  plugins: [],
}