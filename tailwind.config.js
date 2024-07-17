/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        orangered: "#e4250b",
        white: "#fff",
        gray: {
          "100": "#202020",
          "200": "#181819",
        },
        goldenrod: "#efb900",
        darkgoldenrod: {
          "100": "#bd8500",
          "200": "rgba(189, 133, 0, 0.09)",
        },
        darkslategray: {
          "100": "#465467",
          "200": "#4a4a4d",
          "300": "#303030",
        },
        dimgray: "#636363",
        lime: "#32f721",
        lightgray: "#d1d2d5",
        salmon: "#ef6855",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "31xl": "50px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      "29xl": "3rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
    screens: {
      mq2350: {
        raw: "screen and (max-width: 2350px)",
      },
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
