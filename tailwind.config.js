/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'var(--font-nunito)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      dark: {
        'darkElements':'#2B3945',
        'darkBackground': '#202C37',
        'darkText': '#111517',

        'lightinput': '#858585',
        'lightBackground': '#FAFAFA',
        'lightElements': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
