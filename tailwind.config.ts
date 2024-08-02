import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize:{
        "100%":"100%",
        "80%":"80%",
      },
      colors: {
        "blue-100": "#F5F6FB",
        "blue-200": "#DDE4F0",
        "blue-300": "#354E95",
        "blue-400": "#787F89",
        "blue-500": "#FBFCFE",
      }
    },
  },
  plugins: [],
};
export default config;
