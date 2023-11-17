/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, html}'],
  theme: {
    extend: {
      width: {
        '500px': '500px',
        '400px': '400px',
        '850px': '850px',
      },
      height: {
        '116': '29rem',
      }
    },
  },
  plugins: [],
}

