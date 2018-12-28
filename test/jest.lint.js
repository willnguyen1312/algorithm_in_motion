const path = require('path')
module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-eslint --fix',
  displayName: 'lint',
  testPathIgnorePatterns: ['node_modules', 'dist', 'coverage', 'test'],
  testMatch: ['**/*.+(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
}
