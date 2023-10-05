/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["oxanium", "sans-serif"],
        inter: ["inter","sans-serif"]
      },
      colors: {
        primary: "#FFC01D",
        secondary: "#0200A7",
        tertiary: "#d22779",
        submessage: "#95959f",
        background: "#11111B",
      },
      screens: {
        'mobile': {'max':'414px'},
      }
    },
  },
  plugins: [],
}

