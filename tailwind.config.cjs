/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { // deluge
          DEFAULT: "#7858AC",
          "50": "#E6DEF2",
          "100": "#CFC2E6",
          "200": "#B9A6D8",
          "300": "#A38BCA",
          "400": "#8E71BC",
          "500": "#7858AC",
          "600": "#654B90",
          "700": "#533F74",
          "800": "#403258",
          "900": "#2D243D"
        },
        secondary: {// yellow-orange
          DEFAULT: "#F48405",
          "50": "#FFE4C6",
          "100": "#FFD19E",
          "200": "#FFBE75",
          "300": "#FFAB4C",
          "400": "#FD9825",
          "500": "#F48405",
          "600": "#CA6E06",
          "700": "#A15907",
          "800": "#794306",
          "900": "#512D05"
        },
        accent: {//pomegranate
          DEFAULT: "#DF0F0F",
          "50": "#FEBCBC",
          "100": "#FD9595",
          "200": "#FA6E6E",
          "300": "#F74949",
          "400": "#F32424",
          "500": "#DF0F0F",
          "600": "#B70E0E",
          "700": "#900D0D",
          "800": "#690B0B",
          "900": "#430808"
        },
        gray: colors.zinc,
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
