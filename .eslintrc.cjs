module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'eslint-config-prettier',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier', 'react', 'react-hooks', 'import'],
    rules: {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react/react-in-jsx-scope': 0,
        'no-console': 0,
        'no-alert': 0,
        'react/state-in-constructor': 0,
        indent: 0,
        'no-unused-vars': 'warn',
        'linebreak-style': 0,
        'react/prop-types': 0,
        'no-underscore-dangle': 'off',
        'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
        'jsx-a11y/click-events-have-key-events': 0,
        'react/function-component-definition': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'prettier/prettier': [
            'warn',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
    },
};
