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
        'primary': '#1E3A5F',      // deep elegant navy - professional & trustworthy
        'accent': '#C9B27A',       // subtle warm gold (kept for warmth)
        'warm-bg': '#FAF9F6',      // clean warm off-white
        'text-dark': '#1F2937',
        'text-muted': '#6B7280',
      }
    },
  },
  plugins: [],
};
export default config;