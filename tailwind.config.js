import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-muted": "#FF8C00", // amber orange and set for the rest of the primary based themes, like buttons, set text colours etc.
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          // importing the built-in 'light' theme
          // and setting the color values for '--primary-muted'
          // (numbers are OKLCH values)
          ...require("daisyui/src/theming/themes")["light"],
          "--primary-muted": "65% 0.2 295",
        },
      },
      // cupcake theme
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "--primary-muted": "87% 0.05 200",
        },
      },
      // dark theme
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--primary-muted": "34% 0.2 289",
        },
      },
    ],
  },
};
