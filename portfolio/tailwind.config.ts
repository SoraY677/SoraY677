import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#D9D9D9",
      secondary: "#0B052D",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Raleway: ["Sawarabi Gothic", "serif"],
      },
      keyframes: {
        floating: {
          "0%": {
            transform: "translate(-2px, -0px)",
          },
          "25%": {
            transform: "translate(-2px, -1px)",
          },
          "50%": {
            transform: "translate(0px, 0px)",
          },
          "75%": {
            transform: "translate(-2px, -1px)",
          },
          "100%": {
            transform: "translate(-2px, -1px)",
          },
        },
      },
      animation: {
        floating: "floating 10s ease-in-out infinite alternate-reverse",
      },
    },
    fontSize: {
      "2xl": [
        "1.6rem",
        {
          lineHeight: "1.8rem",
          fontWeight: "900",
        },
      ],
      xl: [
        "1.4rem",
        {
          lineHeight: "1.6rem",
          fontWeight: "700",
        },
      ],

      lg: [
        "1.2rem",
        {
          lineHeight: "1.4rem",
          fontWeight: "500",
        },
      ],
      md: [
        "1rem",
        {
          lineHeight: "1.2rem",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.8rem",
        {
          lineHeight: "1rem",
          fontWeight: "300",
        },
      ],
      xs: [
        "0.7rem",
        {
          lineHeight: "0.8rem",
          fontWeight: "300",
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
