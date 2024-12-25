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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lilita: ['var(--font-lilita-one)'],
      },
      clipPath: {
        'upper-left-triangle': 'polygon(0 0, 100% 0, 0 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
