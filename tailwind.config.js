/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/templates/*"],
  theme: {
    extend: {
      fontFamily: {
      'josefin': ["Josefin Sans", 'sans-serif'],
      'montserrat': ["Montserrat", 'sans-serif'],      
      },
    },
  },
  plugins: [],
}