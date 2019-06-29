const OFF = 0;
const ERROR = 2;

module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/prop-types': OFF,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF
  },
  settings: { react: { pragma: 'h' } }
};
