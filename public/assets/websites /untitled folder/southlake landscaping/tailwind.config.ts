import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'earth': {
          50: '#faf5f0',
          100: '#f0e6d8',
          200: '#e0ccb0',
          300: '#cfad82',
          400: '#c19158',
          500: '#b67d3f',
          600: '#a46834',
          700: '#88512d',
          800: '#6f422a',
          900: '#5b3826',
          950: '#311c12',
        },
        'stone': {
          50: '#f8f8f7',
          100: '#f0efed',
          200: '#dddbd6',
          300: '#c5c2b9',
          400: '#aaa598',
          500: '#968f80',
          600: '#897f72',
          700: '#72695f',
          800: '#5f5750',
          900: '#4e4843',
          950: '#292623',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config



