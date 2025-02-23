module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
};
