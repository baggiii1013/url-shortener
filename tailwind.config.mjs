/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#007bff',
        btnColor:'#09427c',
        main:'rgb(161, 206, 253)',
        bgColor:'rgb(37, 102, 172)',
      },
    },
  },
  plugins: [],
};
