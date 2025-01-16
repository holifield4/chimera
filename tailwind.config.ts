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
        primary: "#F5F5F5",
        secondary: "#48CFCB",
        accent: "#229799",
        neutral: "#424242",
      },
    },
  },
  plugins: [],
} satisfies Config;
