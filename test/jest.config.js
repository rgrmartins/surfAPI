// config dos testes com jest para testes funcionais dentro da pasta test
const { resolve } = require('path');
const root = resolve(__dirname);
const rootConfig = require(`${root}/jest.config.js`);

module.exports = { ...rootConfig, ...{
    displayName: 'end2end-tests',
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/test/**/*.test.ts"],
}}
