module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        expect: true
    },
    extends: [
        'airbnb',
        'plugin:flowtype/recommended'
    ],
    rules: {
        'no-unexpected-multiline': 2,
        'eol-last': ["error", "never"],
        "flowtype/no-types-missing-file-annotation": 2
    },
    plugins: [
        'flowtype'
    ],
    env: {
        jest: true
    }
}