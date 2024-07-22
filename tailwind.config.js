// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4E596F",
        secondary: "#242A38",
        tertiary: "#F66763",
        mybtn: "#F87A63",
        danger: "#e3342f",
        mybg: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
