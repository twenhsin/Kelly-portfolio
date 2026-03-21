import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        teal: '#2A9D8F',
        offwhite: '#FFFEFD',
      },
    },
  },
} satisfies Config
