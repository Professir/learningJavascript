/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'p-board': 'repeat(30, 1fr) / repeat(30, 1fr)',
      },
      gridTemplateRows: {
        'p-board': 'repeat(30, 1fr) / repeat(30, 1fr)',
      },
    },
  },
  plugins: [],
}