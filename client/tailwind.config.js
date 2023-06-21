/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        '2/6': '33.33%',
      },
      height: {
        screen: '100dvh',
      },
      width: {
        screen: '100dvw',
      },
    },
  },
  plugins: [],
};
