/* eslint-disable @typescript-eslint/no-var-requires */
const forms = require('@tailwindcss/forms');

const lineClamp = require('./lib/tailwind/line-clamp');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./**/*.ts', './**/*.tsx', './styles/global.css'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      navyblue: '#0B1D32',
      mainblue: '#27A2F8',
      white: '#FFFFFF',
      navybluesoft: 'rgba(11, 29, 50, 0.2)',
      softerblue: 'rgba(39, 162, 248, 0.4)',
      middleblue: '#004869'
    },
    fontSize: {
      'xs': ['9px', { lineHeight: '15px', fontWeight: 400 }],
      'sm': ['14px', { lineHeight: '32px', fontWeight: 400 }],
      'md': ['16px', { lineHeight: '24px', fontWeight: 400 }],
      'lg': ['18px', { lineHeight: '28px', fontWeight: 400 }],
      'xl': ['20px', { lineHeight: '28px', fontWeight: 400 }],
      '2xl': ['24px', { lineHeight: '32px', fontWeight: 400 }],
      '3xl': ['30px', { lineHeight: '36px', fontWeight: 400 }],
      '4xl': ['36px', { lineHeight: '40px', fontWeight: 400 }],
      '5xl': ['48px', { lineHeight: '48px', fontWeight: 400 }],
      '6xl': ['60px', { lineHeight: '60px', fontWeight: 400 }]
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 600,
      bolder: 700
    },
    fontFamily: {
      sans: 'Niveau Grotesk',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [forms, lineClamp],
};
