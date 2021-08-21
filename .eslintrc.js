module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' },
    ],
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': ['off', { caseSensitive: true }],
    'import/extensions': 'off',
    'react/jsx-uses-vars': 1,
  },
};
