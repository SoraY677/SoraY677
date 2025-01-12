import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Raleway: ["Sawarabi Gothic", "serif"],
      },
    },
    fontSize: {
      "2xl": [
        "2rem",
        {
          lineHeight: "2.2rem",
          fontWeight: "900",
        },
      ],
      xl: [
        "1.6rem",
        {
          lineHeight: "1.8rem",
          fontWeight: "700",
        },
      ],

      lg: [
        "1.3rem",
        {
          lineHeight: "1.4rem",
          fontWeight: "500",
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
