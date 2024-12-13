/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F5A11D",
        secondary: "#0A5B9A",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"], 
      },
    },
  },
  plugins: [],
};
