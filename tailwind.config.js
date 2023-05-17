/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#b0d6fc",

        secondary: "#bc90f9",

        accent: "#d8b836",

        neutral: "#1C2331",

        "base-100": "#FFFFFF",

        info: "#6EA4DE",

        success: "#145244",

        warning: "#FAA60A",

        error: "#ED685E",
      },
    },
  ],

  plugins: [require("daisyui")],
};
