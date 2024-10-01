import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    moduleNameMapper: {
        "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js"
    },
};

export default config;
