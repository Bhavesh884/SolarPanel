// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#359D9E",
        secondary: "#55C595",
        tertiary: "#CFF4D2",
        mybtn: "#215273",
        danger: "#e3342f",
        mybg: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
