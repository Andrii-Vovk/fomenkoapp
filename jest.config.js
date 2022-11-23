const config = {
  verbose: true,
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

// eslint-disable-next-line no-undef
module.exports = config;
