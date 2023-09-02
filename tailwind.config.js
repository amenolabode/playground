/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // white: "#ffffff",
        black: "#202124",
        blackBg: "#F2F2F2",
        border: "#5f6368",
        purple: "#3E1770",
        purpleBg: "#F6EFFF",
        blue: "#15A3EF",
        blueBg: "#EAF7FE",
        primaryWhiteText: "#E1E0E3",
        primaryBlackText: "#1C1C1C",
        secondaryBlackText: "#1B1B1B",
        yellow: "#F4D35E",
        red: "#DF2935",
        redBg: "#FFEAEB",
        green: "#06D6A0",
      },
      // fontFamily: {
      //   satoshi: ['Satoshi', 'sans'],
      // },
      // fontWeight: {
      //   w300: 300,
      //   w400: 400,
      //   w500: 500,
      //   w700: 700,
      //   w900: 900,
      // },
    },
  },
  plugins: [],
};
