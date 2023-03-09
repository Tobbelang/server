/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],

  variants: {
    textColor: ['group-hover'],
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'Signika': ['Signika Negative', 'sans-serif'],
    },
    extend: {
      margin: {
        'half': '50%'
      },
      left: {
        'half': '50%'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'upvote': '#22c55e',
      'downvote': '#be123c',
      'white': '#ffffff',
      'black': 'rgb(0,0,0)',
      'gray-200': 'rgb(229 231 235)',
      'gray-500': 'rgb(107 114 128)',
      'gray-800': '#1f2937',
      'blue-700': '#1d4ed8',
      'grayish': 'rgba(255,255,255,0.7)',
      'purple': '#3f3cbb',
      'midnight': 'rgb(49,49,64)',
      'midnightLight': 'rgba(49,49,64,0.6)',
      'metalLight': "rgba(86, 85, 132, 0.5)",
      'metal': 'rgb(86, 85, 132)',
      'tahiti': '#3ab7bf',
      'silverLight': 'rgba(236, 235, 255, 0.4)',
      'silver': 'rgb(236, 235, 255)',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'red': '#be123c',
      'slate': '#DBDBDB'
    },
  },
  plugins: [require("daisyui")],
}
