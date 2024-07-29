module.exports = {
    root: true,
    extends: '@react-native/eslint-config',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        quotes: ['off', 'single', 'avoid-escape'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/react-in-jsx-scope': 'off',
        'object-curly-spacing': ['error', 'always'],
        // note you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 'off',
        'no-extra-boolean-cast': 'off',
        'dot-notation': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'import/newline-after-import': ['error', {count: 1}],
        'react/display-name': [
            'error',
            {
                ignoreTranspilerName: false,
            },
        ],
        semi: ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                doubleQuote: false,
                jsxSingleQuote: true,
                useTabs: false,
                tabWidth: 4,
                // semi: true,
                // trailingComma: 'all',
                // arrowParens: 'always',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
    },
};
