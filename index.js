module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  rules: {
    'curly': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-console': 'off',
    'semi': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ]
  }
};
