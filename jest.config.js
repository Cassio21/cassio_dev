export const testEnvironment = "jest-environment-jsdom";
export const setupFilesAfterEnv = ["<rootDir>/jest/setup.tests.js"];
export const moduleNameMapper = {
  "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/jest/mocks/fileMock.js",
  "\\.(css|sass|less|scss)$": "identity-obj-proxy",
};
