module.exports = {
  content: [],

  mode: 'jit',

  theme: {
    fontFamily: {},
    borderColor: (theme) => ({
      primary: 'var(--primary-color)',
    }),

    screens: {
      xs: '375px',
      sm: '768px',
      lg: '1024px',
      xl: '1032px',
    },
    colors: {},
    extend: {
      spacing: {
        340: '340px',
        '2px': '2px',
        '19px': '-19px',
        '90px': '90px',
      },
      textColor: {
        base: 'var(--text-base)',
        'base-700': 'var(--text-base-700)',
        primary: 'var(--primary-color)',
        disabled: 'var(--disabled-color)',
        white: 'var(--white-color)',
      },
      backgroundColor: {
        white: 'var(--bg-white)',
        base: 'var(--bg-base)',
        light: 'var(--bg-light)',
        grey: 'var(--bg-grey)',
        primary: 'var(--primary-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-rtl')],
};
