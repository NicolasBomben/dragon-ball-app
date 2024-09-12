/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        SaiyanSans:['Saiyan-Sans'],
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}