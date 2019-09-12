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
  rules: {
    // The following rules are changes to the defaults of airbnb to better match Ember projects we
    // copied from: https://github.com/netguru/eslint-config-netguru-ember/blob/master/index.js
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'no-shadow': 'off',
    'no-else-return': 'off',
    'no-extend-native': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-rest-params': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'generator-star-spacing': [2, 'after'],
    // The airbnb rules seem to trip over imports like `@ember/controller`. This is the modern,
    // idiomatic way to do these imports in Ember and adding a file extension doesn't fix this so we
    // disable this rule.
    'import/extensions': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
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
