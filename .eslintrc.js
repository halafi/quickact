module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['config/**'],
      },
    ],
  },
};
