// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3361AC",
        secondary: "#0F2043",
        tertiary: "#E8C766",
        mybtn: "#162F65",
        danger: "#e3342f",
        mybg: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
