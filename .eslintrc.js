module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@intlify/vue-i18n/recommended', // vue-i18n 插件
    'plugin:prettier/recommended', // prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // common-rules
    'no-undef': 'off',
    'import/order': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],

    // vue-rules
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/padding-line-between-blocks': ['error', 'always'],

    // extensions
    'vue/eqeqeq': ['error', 'smart'],
    'vue/comma-style': ['error', 'last'],
    'vue/block-spacing': ['error', 'always'],
    'vue/dot-location': ['error', 'property'],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/space-infix-ops': 'error',
    'vue/prefer-template': 'error',
    'vue/template-curly-spacing': 'error',
    'vue/space-in-parens': ['error', 'never'],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],

    // eslint-plugin-vue-i18n
    '@intlify/vue-i18n/no-raw-text': 'off',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-unused-keys': ['error', { extensions: ['*.vue'] }],
  },
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^9.0.0',
    },
  },
};
