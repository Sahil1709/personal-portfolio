/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}

