module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  globals: {
    bimsync: {},
    window: {
      location: {}
    }
  },
  cacheDirectory: './jest-cache',
  setupFiles: ['<rootDir>/__mocks__/throw-on-prop-type-error.js'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg-react-loader-mock.jsx',
    '\\.scss$': '<rootDir>/__mocks__/scss-loader-mock.js',
    'string-format': '<rootDir>/__mocks__/string-format-mock.js',
    '^app(.*)$': '<rootDir>/src/$1'
  },
  rootDir: './',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
