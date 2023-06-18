/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: "#6AAA64",
        yellow: "#CEB02C",
        gray: "#939B9F",
        background: "#F3F3F3",
        "dark-background": "#262B3CE3",
        "gray-key": "#D3D6DA",
        "dark-key": "#565F7E",
        "white-background": "#F3F3F3E3",
      },
      borderRadius: {
        m: "5px",
      },
    },
  },
  plugins: [],
};
