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
        bg: "#10151A",
        yellow: "#FFC803",
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
