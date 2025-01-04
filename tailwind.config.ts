import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          440: "#5C9DFF",
          550: "#7795FF",
          dark: {
            950: "#0A1117",
            900: "#10151A",
            850: "#121E28",
            800: "#14212D",
            700: "#182632",
            600: "#202C37",
            550: "#243241",
            500: "#2A3744",
            450: "#2F3C49",
            400: "#37424D",
            300: "#5A6C7E",
            200: "#707F8D",
            100: "#8395A7",
            50: "#9AAFC3",
          },
          light: {
            700: "#23C9DE",
            600: "#4BE1F4",
            400: "#77E6FF",
          },
        },
        yellow: {
          600: "#FFC803",
          550: "#FFCF01",
          green: "#DBE268",
        },
        orange: {
          900: "#4D3705",
          700: "#FF8135",
          600: "#FFA800",
          550: "#FFAC32",
          300: "#FFC24C",
          200: "#FFCC4A",
        },

        pink: {
          600: "#F87388",
          500: "#F78787",
          400: "#FFB4D3",
        },
        purple: {
          900: "#40354B",
          600: "#A36FFE",
          500: "#9277FF",
          100: "#E2C1F9",
        },
      },
      fontFamily: {
        "loos-bold": ["var(--font-loosWideBold)"],
      },
      screens: {
        xs: "328px",
        sm: "400px",
        md: "736px",
        // lg: "768px",
        xl: "1140px",
        // "2xl": "1200px",
      },
      fontSize: {
        "2sm": "0.9375rem",
        "5.5xl": "3.25rem",
      },
      borderRadius: {
        "2md": "0.4375rem",
        "2lg": "0.625rem",
        "2.5xl": "1.25rem",
        circle: "100%",
      },
      spacing: {
        "1.25": "0.3125rem",
        "2.75": "0.6875rem",
        "4.25": "1.0625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "25": "6.25rem",
      },
      lineHeight: {
        "7.5": "1.875rem",
        "11": "2.75rem",
        "15": "3.75rem",
        "20.5": "5.125rem",
      },
      container: {
        center: true,
      },
      boxShadow: {
        "btn-md": "0 7px 36px",
        "btn-lg": "0 8px 40px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          "--tw-translate-x": "-50%",
          "--tw-translate-y": "-50%",
          transform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
      });
    }),
  ],
} satisfies Config;
