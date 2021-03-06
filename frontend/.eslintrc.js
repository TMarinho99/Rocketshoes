module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/prettier'
  ],
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
  plugin: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn',
        { extension: ['.jsx', '.js'] }
      ],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-console': ["error", { allow: ["tron"] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
  },
};
