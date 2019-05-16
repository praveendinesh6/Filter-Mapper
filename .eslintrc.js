module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    'jQuery': false
  },
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': 'off',
    "indent": [ 2, 2, { "SwitchCase": 1 }],
    'ember/jquery-ember-run': 'off',
    'no-useless-escape': 0,
    "quote-props": [ 2, "as-needed", { "keywords": true } ],
    'ember/closure-actions': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
