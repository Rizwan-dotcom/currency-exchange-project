/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',   // Extra Small
        'sm': '480px',   // Small (Default Tailwind)
        'md': '768px',   // Medium (Default Tailwind)
        'lg': '1024px',  // Large (Default Tailwind)
        'xl': '1280px',  // Extra Large (Default Tailwind)
        '2xl': '1536px', // 2XL (Default Tailwind)
        '3xl': '1800px', // Custom: Ultra Large Screens
      }
    },
  },
  plugins: [],
}
