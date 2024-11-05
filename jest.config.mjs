import { defaults } from "jest-config";

export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.mjs"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.mjs$": "babel-jest", // Adicione esta linha para transformar arquivos .mjs
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mjs"], // Adiciona suporte para arquivos .mjs
};
