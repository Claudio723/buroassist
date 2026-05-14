import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans-custom': ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#B76E79',      // soft dusty rose
        'accent': '#C9B27A',       // subtle warm gold
        'warm-bg': '#FFFBFA',      // ultra light - almost pure white with tiniest pink hint
        'text-dark': '#3F2E2E',
        'text-muted': '#7A6B6B',
      }
    },
  },
  plugins: [],
};
export default config;