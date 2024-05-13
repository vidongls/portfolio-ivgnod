import type { Config } from 'tailwindcss'
// tailwind.config.js
import resolveConfig from 'tailwindcss/resolveConfig'
import defaultConfig from 'tailwindcss/defaultConfig'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    primary: {
      DEFAULT: '#0e100f',
    },
    secondary: {
      DEFAULT: '#212121',
    },
    tertiary: {
      DEFAULT: '#fffce1',
    },
  },
}

const plugin = function ({ addUtilities }: any) {
  const newUtilities = {
    '.text-gradient-primary': {
      background: 'linear-gradient(111.45deg, #FF8709 19.42%, #F7BDF8 73.08%)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      color: 'transparent',
    },
    '.bg-gradient-primary': {
      background: 'linear-gradient(111.45deg, #FF8709 19.42%, #F7BDF8 73.08%)',
    },
    '.text-gradient-secondary': {
      background: 'radial-gradient(152.22% 128.73% at 133.77% 74.23%, #DFDCFF 27.08%, #A69EFF 100%)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      color: 'transparent',
    },
    '.bg-gradient-secondary': {
      background: 'radial-gradient(152.22% 128.73% at 133.77% 74.23%, #DFDCFF 27.08%, #A69EFF 100%)',
    },
  }

  return addUtilities(newUtilities, ['responsive', 'hover'])
}
const defaultConfigVar = resolveConfig(defaultConfig)

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: colors,
      height: {
        ...defaultConfigVar.theme.height,
        22: '88px',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), plugin],
}
export default config
