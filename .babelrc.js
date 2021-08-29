module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    'babel-plugin-twin', // includes twin.macro’s tw prop without you adding the twin import
    '@emotion/babel-plugin',
    'babel-plugin-macros',
  ],
};
