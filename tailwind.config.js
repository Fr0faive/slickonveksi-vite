/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#44c9b1",

          secondary: "#5cc4ed",

          accent: "#dc5dfc",

          neutral: "#ffc32d",

          "base-100": "#31373a",

          info: "#4b80dd",

          success: "#169c8d",

          warning: "#f8cc5d",

          error: "#fa6052",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-primary": "#3540be",
        "burn-orange": "#ff692a",
        sunglow: "#ffc32d",
        malachite: "#14e065",
        "black-pearl": "#14171c",
      },
      colors: {
        "black-pearl": "#14171c",
      },
      backgroundImage: {
        auth: "url('./assets/bg-auth.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
