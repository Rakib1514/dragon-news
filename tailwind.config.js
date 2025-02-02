/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnClr: "#D72050"
      },
      fontFamily: {
        poppins: ["Poppins" , 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}