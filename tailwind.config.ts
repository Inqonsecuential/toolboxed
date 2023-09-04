import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/tools/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'biloba-flower': {
          '50': '#fbf6fd',
          '100': '#f5ebfc',
          '200': '#ebd7f7',
          '300': '#deb7f0',
          '400': '#d29eea',
          '500': '#b15fd6',
          '600': '#9640b9',
          '700': '#7d3299',
          '800': '#682a7e',
          '900': '#582768',
          '950': '#360f43',
        },
        cornflower: {
          '50': '#f0f7fd',
          '100': '#e4f0fb',
          '200': '#cfe2f6',
          '300': '#b1cff0',
          '400': '#9fbcea',
          '500': '#7797dd',
          '600': '#5d78ce',
          '700': '#4d64b5',
          '800': '#405393',
          '900': '#3a4975',
          '950': '#222a44',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
export default config;
