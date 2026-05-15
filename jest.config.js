export default {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
    '^expo-modules-core$': '<rootDir>/node_modules/expo-modules-core'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|nativewind|react-native-svg))'
  ]
};
