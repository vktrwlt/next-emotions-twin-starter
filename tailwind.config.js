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
      fontSize: {
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        36: '36px',
        42: '42px',
        48: '48px',
        60: '60px',
        64: '64px',
        72: '72px',
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
