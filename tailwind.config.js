module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '96px',
        '2xl': '192px',
      },
      colors: {
        gray: {
          50: '#F8F8FF',
        },
        blue: {
          DEFAULT: '#00cfff',
          600: '#007cb9',
        },
        red: {
          500: '#8f2800',
        },
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
