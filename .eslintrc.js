module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    // Disable 'html-closing-bracket-newline' error
    'vue/html-closing-bracket-newline': 'off',

    // Disable self-closing rule for void elements (e.g., <img/>)
    'vue/html-self-closing': 'off',

    // Disable 'max-attributes-per-line' rule
    'vue/max-attributes-per-line': 'off',

    // Disable indentation warnings
    'vue/html-indent': 'off',

    // Modify trailing comma rule (optional)
    'comma-dangle': 'off',

    // Modify semi rule to allow optional semicolons
    'semi': 'off',

    // Ignore space before function parentheses
    'space-before-function-paren': 'off',

    // Disable 'no-console' warning
    'no-console': 'off',

    // Add any other custom rules below if needed
    'vue/no-v-html': 'off',

    // Disable single quote enforcement
    'quotes': 'off',
  }
}
