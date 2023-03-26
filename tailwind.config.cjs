/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: ["cupcake", "dark", "cmyk", "pastel", "aqua", "emerald"]
};

module.exports = config;
