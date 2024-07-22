// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F5E6C5",
        secondary: "#222222",
        tertiary: "#FF6E1F",
        mybtn: "#FF6E1F",
        danger: "#e3342f",
        mybg: "#F5F5F8",
      },
    },
  },
  plugins: [],
};
