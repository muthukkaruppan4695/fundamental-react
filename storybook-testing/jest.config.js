
module.exports = {
    rootDir: '../storybook-testing/',
    verbose: true,
    testEnvironment: 'node',
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['../config/jest/setup.js'],
    moduleNameMapper: {
        '^.+\\.(scss|css)$': 'babel-jest'
    },
    transformIgnorePatterns: [
        'node_modules\/?!(react-syntax-highlighter)'
    ],
    transform: {
        '^.+\\.stories\\.js$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.?visual\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
    }
};
