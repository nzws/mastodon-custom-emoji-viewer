const ON = true
const OFF = null

module.exports = {
  syntax: 'css-in-js',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': ON,
    'declaration-empty-line-before': OFF,
    'function-name-case': OFF,
  },
}
