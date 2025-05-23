/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "first-bg": "url('/public/images/main_img(1).jpg')",
        "second-bg": "url('/public/images/second_img(2).jpg')",
        "pandat-bg": "url('/public/images/pandat_2.png')",
      },
      keyframes: {
        gotoRight: {
          "0%": {
            transform: "translateX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(100px)",
            opacity: "1",
          },
        },
        gotoDown: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(100px)",
            opacity: "1",
          },
        },
        gotoDownLow: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(50px)",
            opacity: "1",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
    colors: {
      white: "rgb(255, 255, 255)",
      dark: "rgb(5, 5, 5)",
      border: "#b6b6b6",
      borderA: "rgb(5, 5, 5, 0.3)",
      title: "#00305b",
      my_name: "rgb(156 163 175)",
    },
  },
  plugins: [],
};
