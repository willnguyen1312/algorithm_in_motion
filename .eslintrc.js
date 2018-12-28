module.exports = {
  parser: 'pluggable-babel-eslint',
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    plugins: ['typescript'],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
