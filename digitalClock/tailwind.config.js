/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'contain-sha': '0 5px 10px rgba(0, 0, 0, .2)'
      },
    },
  },
  plugins: [],
}