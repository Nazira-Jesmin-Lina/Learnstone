/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontFamily: {
        hind: ['hind', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',  // Adjust the pixel value as needed
        '4xl': '2146px',  // Example for even larger screens
        'sm' : '375px'
      },
      colors: {
        "green": '#374F37',
        "darkGreen": "#21463C",
        "lemonGreen": "#A2FF48",
        "seaGreen": "#3a523a",
        "beige-0": "#FCFAEF",
        "beige-1": '#F4EED3',
        "beige-2": "#DBCCB1",
        "orange": "#FF5F45",
      }
    },
  },
  plugins: [],
}
