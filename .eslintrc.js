module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['app/components', './src/components']],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/prop-types': 0,
        'react/display-name': 0,
        'linebreak-style': ['error', 'unix'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@pexip/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '{**,.}/*.module.scss',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
    },
};
