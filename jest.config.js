module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "vue-uploader/(.*)": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.config.pretest.js"]
};
