import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Blogger Sans Light', 'Blogger Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Blogger Sans Light', 'Blogger Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'infinityColor': 'infinityColor 8s ease-in-out infinite',
      },
      keyframes: {
        infinityColor: {
          '0%, 100%': { stroke: '#3b82f6', filter: 'drop-shadow(0 0 8px #3b82f6)' },
          '25%': { stroke: '#10b981', filter: 'drop-shadow(0 0 8px #10b981)' },
          '50%': { stroke: '#6366f1', filter: 'drop-shadow(0 0 8px #6366f1)' },
          '75%': { stroke: '#ec4899', filter: 'drop-shadow(0 0 8px #ec4899)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
