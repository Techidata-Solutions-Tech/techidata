/** @type {import('tailwindcss').Config} */
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
        "cs-red":"rgba(243, 31, 69, 1)"
      },
      fontFamily: {
        custom: ['Bagien Demo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
