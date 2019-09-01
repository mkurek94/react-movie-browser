module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>test/__mocks__/fileMock.js',
        '\\.(css|less)$': '<rootDir>test/__mocks__/styleMock.js',
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'utils/noop.js',
        '\\.d\\.ts$',
    ],
    testRegex: '.*\\.test\\.(js|ts)x?$',
    testEnvironment: 'node',
    transform: {
        '\\.jsx?$': 'babel-jest',
        '\\.tsx?$': 'ts-jest',
    },
    setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
    modulePathIgnorePatterns: [
        '/node_modules/',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    testURL: 'https://localhost/',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'jest.config.js',
        'tools/jest/**/*.js'
    ],
    verbose: false,
    reporters: [process.env.CI ? 'jest-dot-reporter' : 'default'],
};
