import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    /*fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },*/
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

