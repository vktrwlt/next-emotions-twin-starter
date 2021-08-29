const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const today = new Date();
const year = today.getFullYear();
module.exports = withPlugins([optimizedImages], {
  target: 'serverless',
  images: {
    disableStaticImages: true,
  },
  env: {
    year: year,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
