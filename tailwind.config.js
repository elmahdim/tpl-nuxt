/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          neutral: "oklch(0.321785 0.02476 255.702)",
          "neutral-focus": "oklch(50% 0.2 245)",
          "neutral-content": "oklch(98% 0 0)",
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          neutral: "oklch(0.4912 0.3096 275.75)",
          "neutral-focus": "oklch(50% 0.2 245)",
          "neutral-content": "oklch(98% 0 0)",
        },
      },
    ],
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
};
