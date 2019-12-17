module.exports = {
    collectCoverageFrom: [
        'src/components/**/*.{js,jsx}',
        'src/common/FlyoutContent/*.{js,jsx}',
    ],
    coverageThreshold: {
        global: {
            statements: 95,
            branches: 90,
            functions: 95,
            lines: 95,
        },
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/__mocks__/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/imageModule.js',
    },
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/test-bundler.js'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testRegex: '__tests__/.*\\.test\\.js$',
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
