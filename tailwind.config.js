/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {
    colors: {
      skyblue: '#00d2ff',
      oceanblue: '#3a7bd5',
    },
    backgroundImage: {
      'gradient-to-r': 'linear-gradient(to right, #3a7bd5, #00d2ff)',
    },
  },
},
  plugins: [],
}

