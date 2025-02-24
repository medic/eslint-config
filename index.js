module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true
  },
  rules: {
    "array-bracket-newline": ["error", "consistent"],
    "array-callback-return": ["error", { "allowImplicit": true }],
    "arrow-spacing": "error",
    "brace-style": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    'curly': 'error',
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    'eol-last': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    "func-call-spacing": "error",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": "error",
    'indent': ['error', 2],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    'max-len': ['error', { 'code': 120, 'ignoreUrls': true }],
    "new-parens": "error",
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    "no-else-return": "error",
    "no-extra-bind": "error",
    "no-lone-blocks": "error",
    "no-nested-ternary": "error",
    'no-sequences': 'error',
    "no-undef-init": "error",
    "no-useless-rename": "error",
    'no-var': 'error',
    "no-whitespace-before-property": "error",
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-regex-literals': 'error',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    "rest-spread-spacing": "error",
    'semi': 'error',
    "semi-spacing": "error",
    "semi-style": "error",
    "template-curly-spacing": "error",
    "unicode-bom": "error"
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
