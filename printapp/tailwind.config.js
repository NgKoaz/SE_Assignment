/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, html}'],
  theme: {
    extend: {
      width: {
        '500px': '500px',
        '400px': '400px',
        '850px': '850px',
        '750px': '750px',
        '1000px': '1000px',
        '1200px': '1200px',
        '450px': '450px',
        '100vw': '100vw',
      },
      height: {
        '116': '29rem',
        '450px': '450px',
        '300px': '300px',
        '250px': '250px',
        '100vh': '100vh',
      },
      minHeight: {
        '100px': '100px',
        '250px': '250px',
      },
      borderWidth: {
        '3': '3px'
      },
      fontSize: {
        '50px': '50px',
        '24px': ['24px', '24px']
      }
    },
  },
  plugins: [],
}

