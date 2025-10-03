export default {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  // transform: {
  //   "^.+\\.(ts|tsx)$": [
  //     "ts-jest",
  //     {
  //       useESM: true,
  //     },
  //   ],
  // },
  // testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "ts", "mjs"],
  // transformIgnorePatterns: [],
};
