/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "first-bg" : "url('/public/images/main_img(1).jpg')",
        "second-bg" : "url('/public/images/second_img(2).jpg')",
      },
      keyframes: {
        gotoRight: {
          "0%": {
            transform: "translateX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(100px)",
            opacity: '1',
          }
        },
      }
    },
    colors: {
      "white": "rgb(245, 245, 245)",
      "dark": "rgb(5, 5, 5)"
    }
  },
  plugins: [],
}

