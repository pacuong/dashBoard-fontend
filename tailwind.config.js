/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/themes/colors");
const { screens } = require("./src/themes/screens");
const { fontSize } = require("./src/themes/fontSize");
const { fontFamily } = require("./src/themes/fontFamily");
const { spacing } = require("./src/themes/spacing");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    spacing,
    extend: {},
    screens,
    colors,
    fontSize,
    fontFamily,
  },
  plugins: [],
};
