module.exports = {
  rootDir: '..',
  maxWorkers: 1,
  testEnvironment: '<rootDir>/detox/environment',
  testRunner: 'jest-circus/runner',
  testTimeout: 20 * 60 * 1000,
  testMatch: ['<rootDir>/TeslaClone/e2e/*.e2e.{ts, tsx}'],
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
};
