/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/components/*.vue',
    './src/components/**/*.vue',
    './src/components/**/**/*.vue',
    './src/pages/*.vue',
    './src/pages/**/*.vue',
    './src/pages/**/**/*.vue',
  ],
  theme: {
    screens: {
      maxwsm: "384px",
      sm: "480px",
      maxwscreensm: "640px",
      md: "768px",
      mdb: "879px",
      lg: "977px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orangeColor:"#D0A144",
        textColor: "#252B42",
        cardTextColor: "#737373",
        linkColor: "#BDBDBD"
      },
    },
  },
  plugins: [],
}

