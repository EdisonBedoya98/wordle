/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#6AAA64",
        yellow: "#CEB02C",
        gray: "#939B9F",
        background: "#F3F3F3",
        "gray-key": "#D3D6DA",
      },
      borderRadius: {
        m: "5px",
      },
    },
  },
  plugins: [],
};
