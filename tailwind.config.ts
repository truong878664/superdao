import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          "950": "#0A1117",
          "900": "#121E28",
          "800": "#14212D",
          "700": "#182632",
          "600": "#202C37",
          "500": "#2A3744",
          "400": "#37424D",
          "300": "#5A6C7E",
          "200": "#707F8D",
          "100": "#8395A7",
          "50": "#9AAFC3",
        },
        blue: "#7795FF",
        yellow: {
          "600": "#FFC803",
          "550": "#FFCF01",
        },
        orange: {
          "900": "#4D3705",
          "700": "#FF8135",
          "600": "#FFA800",
          "550": "#FFAC32",
          "300": "#FFAC32",
          "200": "#FFCC4A",
        },
        "yellow-green": "#DBE268",
        "light-blue": {
          "700": "#23C9DE",
          "600": "#4BE1F4",
          "400": "#77E6FF",
        },
        pink: {
          "600": "#F87388",
          "500": "#F78787",
          "400": "#FFB4D3",
        },
        purple: {
          "900": "#40354B",
          "600": "#A36FFE",
          "500": "#9277FF",
          "100": "#E2C1F9",
        },
      },
      fontFamily: {
        "loos-bold": ["var(--font-loosWideBold)"],
      },
      screens: {
        xs: "328px",
        sm: "400px",
        md: "736px",
        lg: "768px",
        xl: "1140px",
        "2xl": "1200px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
