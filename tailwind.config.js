/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary-color' : '#525371',
      'secondary-color' : '#32d095',
      'text-color' : '#525371',
      'body-color' : '#EDF2F6',
      'input-bgcolor' : '#d7e7f4',
    }
    },
  },
  plugins: [],
}

