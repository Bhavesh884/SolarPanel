// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C3E4E9",
        secondary: "#222222",
        tertiary: "#033653",
        mybtn: "#033653",
        danger: "#e3342f",
        mybg: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
