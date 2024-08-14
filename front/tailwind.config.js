/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      customFontEn: ['IBM plex Mono', 'monospace'],
      customFontKR: ['IBM plex Sans KR', 'sans-serif'],
    },
  },
  plugins: [],
};
