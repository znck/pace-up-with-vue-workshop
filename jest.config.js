module.exports = {
  verbose: true,
  globals: {
    __DEV__: true,
    __JSDOM__: true,
    'vue-jest': {
      experimentalCSSCompile: false,
    },
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/tests/unit/setup.js'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/matchers.js',
  testMatch: ['<rootDir>/exercises/**/*.test.js', '<rootDir>/src/**/*.unit.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@router/(.*)$': '<rootDir>/src/router/$1',
    '^@views/(.*)$': '<rootDir>/src/router/views/$1',
    '^@layouts/(.*)$': '<rootDir>/src/router/layouts/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@state/(.*)$': '<rootDir>/src/state/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
}
