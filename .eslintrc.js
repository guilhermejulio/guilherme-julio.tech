module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['off', { singleQuote: true }],
    'no-console': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    "react/prop-types": "off"
  },
  parser: 'babel-eslint',
};
