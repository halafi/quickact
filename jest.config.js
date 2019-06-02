module.exports = {
  setupFiles: ['./config/jestSetup.js'],
  setupFilesAfterEnv: ['./config/jestSetupFramework.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/client/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
    'jest.config.js',
    '/records/',
    '/consts/',
    '/client/index.js',
    '/client/App.jsx',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
