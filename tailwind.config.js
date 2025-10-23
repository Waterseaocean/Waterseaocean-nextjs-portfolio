// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#171717",
            a: {
              color: "#2563eb",
              "&:hover": { color: "#1d4ed8" },
            },
          },
        },
        dark: {
          css: {
            color: "#ededed",
            a: {
              color: "#93c5fd",
              "&:hover": { color: "#bfdbfe" },
            },
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};
