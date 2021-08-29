module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'eslint',
    'npx jest --bail --findRelatedTests',
  ],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
};
