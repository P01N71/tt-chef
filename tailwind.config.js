/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 🔥 이 줄이 있어야 src 폴더 안의 파일들을 꾸며줍니다!
  ],
  theme: {
    extend: {
      fontFamily: {
        // 기본 폰트를 경기천년바탕으로 설정
        sans: ['GyeonggiMillenniumBackground', 'sans-serif'],
      },
    },
  },
  plugins: [],
}