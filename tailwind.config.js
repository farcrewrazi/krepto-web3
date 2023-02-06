/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': {
          '1': '#FFFFFF',
          '2': '#F3F5F9',
        }
      }
    },
  },
  plugins: [],
}
