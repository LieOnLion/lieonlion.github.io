/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colour: {
          primary: {
            100: '',
            200: '',
            300: '',
            400: '',
            500: '#5c27ce'
          },
          text: {
            100: '',
            200: '',
            300: '',
            400: '#b9b9c3',
            500: '#ffffff'
          },
          bg : {
            100: '#2e2e2e',
            200: '#212121',
            300: '#1e1e1e',
            400: '#0f0f0f',
            500: '#0b0b0b'
          }
        }
      },
      boxShadow: {
        'nav': '0 4px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

