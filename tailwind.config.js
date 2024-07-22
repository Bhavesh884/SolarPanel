// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6295FE",
        secondary: "#031B89",
        tertiary: "#A9B5FF",
        mybtn: "#A9B5FF",
        danger: "#e3342f",
        mybg: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
