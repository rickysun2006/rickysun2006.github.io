import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "Cambria", "serif"],
      },
      maxWidth: {
        content: "52rem",
      },
    },
  },
  plugins: [],
};

export default config;
