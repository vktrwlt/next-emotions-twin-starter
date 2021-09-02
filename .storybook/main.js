const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias['@emotion/core'] = toPath(
      'node_modules/@emotion/react'
    );

    config.resolve.alias['@/components'] = toPath('src/components');
    config.resolve.alias['@/pages'] = toPath('src/pages');
    config.resolve.alias['@/templates'] = toPath('src/templates');
    config.resolve.alias['@/theme'] = toPath('src/theme');
    config.resolve.alias['@/assets'] = toPath('src/assets');
    config.resolve.alias['@/utils'] = toPath('src/utils');

    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
