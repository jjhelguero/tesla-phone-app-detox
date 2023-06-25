// @ts-check

/// <reference path="node_modules/detox/index.d.ts" />

/**
 * @type {Detox.DetoxConfig}
 */
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'detox/jest.config.js',
  skipLegacyWorkersInjection: true,
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/mercari.app',
      build:
        'xcodebuild -workspace ios/mercari.xcworkspace -scheme Mercari -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
    },
  },
  devices: {
    'ios.simulator': {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 13',
        os: 'iOS 15.2',
      },
    },
    'android.emulator': {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_4_API_30',
      },
    },
    'android.attached': {
      type: 'android.attached',
      device: {
        // Use whichever device is attached
        adbName: undefined,
      },
    },
  },
  configurations: {
    'debug.ios': {
      device: 'ios.simulator',
      app: 'ios.debug',
    },
    'debug.android': {
      device: 'android.emulator',
      app: 'android.debug',
    },
    'debug.android.attached': {
      device: 'android.attached',
      app: 'android.debug',
    },
  },
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
};
