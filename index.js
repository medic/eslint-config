module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  rules: {
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'guard-for-in': 'error',
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 120, 'ignoreUrls': true }],
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-sequences': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-regex-literals': 'error',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'semi': ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/tests/**', '**/test/**'],
      env: {
        mocha: true
      },
      rules: {
        'no-global-assign': 'off'
      },
      globals: {
        '_': true,
        'assert': true,
        'browser': true,
        'by': true,
        'chai': true,
        'element': true,
        'emit': true,
        'expect': true,
        'inject': true,
        'KarmaUtils': true,
        'moment': true,
        'Promise': true,
        'protractor': true,
        'Q': true,
        'sinon': true
      }
    },
  ]
};
