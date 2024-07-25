// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#404040",
        secondary: "#17202A",
        tertiary: "#ABABAB ",
        mybtn: "#17202A",
        danger: "#e3342f",
        mybg: "#f3f3f3",
      },
    },
  },
  plugins: [],
};
