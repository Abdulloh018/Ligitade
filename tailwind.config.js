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
      maxWidthsm: "384px",
      maxWidthmd: "448px",
      sm: "480px",
      maxWidthmd: "512px",
      maxWidthScreensm: "640px",
      md: "768px",
      mdb: "879px",
      maxWidth4xl: "896px",
      maxWidth5xl: "1024px",
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

