module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': [2, { props: false }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
  },
  ignorePatterns: ['blocks/**/*.md'],
};