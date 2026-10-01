/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/**/**/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2A945B",
        secondary: "#000000",
        tertiary: "#DD171E",
        accent: "#053154",
        gray: "#1C1C1E",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",

        background: "#000000",
        text: "rgb(var(--color-text) / <alpha-value>)",
      },
      fontFamily: {
        'futura': ['FuturaXBlkBT'],
        'sf-pro': ['SF-Pro-Display-Regular'],
        'monsura-black': ['Montserrat-Black'],
      },
    },
  },
  plugins: [],
}

