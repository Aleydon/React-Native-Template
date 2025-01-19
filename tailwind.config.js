/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        thin: ['Inter_100Thin', 'sans-serif'],
        extralight: ['Inter_200ExtraLight', 'sans-serif'],
        light: ['Inter_300Light', 'sans-serif'],
        regular: ['Inter_400Regular', 'sans-serif'],
        medium: ['Inter_500Medium', 'sans-serif'],
        semibold: ['Inter_600SemiBold', 'sans-serif'],
        bold: ['Inter_700Bold', 'sans-serif'],
        extrabold: ['Inter_800ExtraBold', 'sans-serif'],
        black: ['Inter_900Black', 'sans-serif']
      }
    }
  },
  plugins: []
};
