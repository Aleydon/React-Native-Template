/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{ts,tsx}'];
export const presets = [require('nativewind/preset')];
export const theme = {
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
};
export const plugins = [];
