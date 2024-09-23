import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#efc2b3',
        'custom-purple': ' #1a2456',
        'custom-red': ' #ff8d6b',
        'custom-yellow': '#f5b335',
        'custom-green': '#5a7f71',
        'custom-white': '#fff',
        'custom-gray': '#6c757d',
        'custom-gray-dark': '#343a40',
        'custom-primary': ' #1a2456',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

  ],
};
export default config;
