const commonConfig = require('../.eslintrc.js');

module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['dist'],
  plugins: [...commonConfig.plugins, 'react'],
  extends: [...commonConfig.extends, 'plugin:react/recommended'],
  rules: commonConfig.rules,
};
