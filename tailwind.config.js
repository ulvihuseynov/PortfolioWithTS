/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
screens:{
"sm":'480px'
},
spacing:{
  "big":'40rem',
  'bigger':'50rem'
},
},
fontFamily:{
  nunito:["Nunito",' sans-serif']
}
  },
  plugins: [],
}

