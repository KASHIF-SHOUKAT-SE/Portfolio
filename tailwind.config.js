/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E14',
          soft: '#0F141C',
          card: '#131924',
          border: '#212938',
        },
        accent: {
          DEFAULT: '#3B82F6',
          soft: '#2563EB',
          dim: '#132347',
        },
        ink: {
          DEFAULT: '#E7ECF3',
          muted: '#8B96A8',
          faint: '#5B6472',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         base: {
//           DEFAULT: '#0A0E14',
//           soft: '#0F141C',
//           card: '#131924',
//           border: '#212938',
//         },
//         accent: {
//           DEFAULT: '#3DDC97',
//           soft: '#2AB57D',
//           dim: '#1C4A3B',
//         },
//         ink: {
//           DEFAULT: '#E7ECF3',
//           muted: '#8B96A8',
//           faint: '#5B6472',
//         },
//       },
//       fontFamily: {
//         display: ['var(--font-display)', 'sans-serif'],
//         sans: ['var(--font-sans)', 'sans-serif'],
//         mono: ['var(--font-mono)', 'monospace'],
//       },
//       maxWidth: {
//         content: '1120px',
//       },
//     },
//   },
//   plugins: [],
// }
