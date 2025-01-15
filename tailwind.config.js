/** @type {import('tailwindcss').Config} */
module.exports = {
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
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
