module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    coverageProvider: "v8",
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/components/**/*.{js,jsx}",
        "!<rootDir>/src/**/*.stories.js",
        "!<rootDir>/src/components/examples/**",
        "!<rootDir>/src/components/utility/**",
        "!<rootDir>/src/components/typography/Markdown/*",
    ],
    testMatch: ["**/*.test.{js,jsx,ts,tsx}"],
    moduleNameMapper: {
        "\\.(css|scss|less)$": "identity-obj-proxy",
        "^@api/(.*)$": "<rootDir>/src/api/$1",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@files/(.*)$": "<rootDir>/src/files/$1",
        "^@hoc/(.*)$": "<rootDir>src/hoc/$1",
        "^@hooks/(.*)$": "<rootDir>src/hooks/$1",
        "^@libraries/(.*)$": "<rootDir>src/libraries/$1",
        "^@public/(.*)$": "<rootDir>src/public/$1",
        "^@storage/(.*)$": "<rootDir>src/storage/$1",
        "^@methods/(.*)$": "<rootDir>src/methods/$1",
        "react-markdown": "<rootDir>/node_modules/react-markdown/",
        "react-gfm": "<rootDir>/node_modules/remark-gfm/",
        "remark-breaks": "<rootDir>/node_modules/remark-breaks/",
    }
};