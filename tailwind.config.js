import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softWhite: "#f5f5f5", // Soft white color for text
        darkGray: "#333333",
        "primary-muted": "#FF8C00", // Dark gray color for text
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF8C00", // Your orange color for accents
          secondary: "#ffffff", // White for backgrounds
          accent: "#000000", // Black for backgrounds
          "base-100": "#ffffff", // White background (e.g., for cards, sections)
          "base-content": "#333333", // Dark gray text for light backgrounds
          neutral: "#f5f5f5", // Soft white for dark backgrounds
          info: "#f5f5f5", // You can add additional theme variables here
        },
      },
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
