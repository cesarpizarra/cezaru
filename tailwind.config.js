const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // darkPrimary: "#222222",
        // darkSecondary: "#1C1D28",
        // "dark-9": "#1A182A",
        // "dark-16": "#231D39",
        // primary: "#fbbf24",
        // whitePrimary: "rgba(255,255,255, 94%)",
        // whiteSecondary: "rgba(255,255,255, 68%)",
        // scrollthumb: "rgba(255,255,255, 20%)",
        // watermark: "rgba(255,255,255, 3%)",
        // wht: "#fff",
        // skillBadge: "rgba(255,255,255,.04)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("daisyui"),
  ],

  daisyui: {
    themes: ["dark"],
  },
};
