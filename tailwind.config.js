/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "960px",
      },
    },
    colors: {
      light: "#FFFFFF",
      black: "#000000",
      primary: {
        300: "#FFCC21",
        400: "#FF963C",
        500: "#EA6C00",
      },
      secondary: {
        300: "#8FE9D0",
      },
      dark: {
        500: "#414141",
        600: "#2E2E2E",
      },
      gray: {
        400: "#777777",
      },
    },
    backgroundImage: {
      primary: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        "Noto-Sans-JP": ["Noto Sans JP"],
      },
      opacity: {
        15: "0.15",
        25: "0.25",
      },
    },
  },
  plugins: [],
};
