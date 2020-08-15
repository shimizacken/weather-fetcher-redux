module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
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
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [
                    [
                        'metricUnits',
                        './src/services/openWeatherMap/metricUnits',
                    ],
                    ['app/services', './src/services'],
                    [
                        'app/services/openWeatherMap',
                        './src/services/openWeatherMap',
                    ],
                    ['app/components/common', './src/components/common'],
                    ['app/features/metricType', './src/features/metricType'],
                    [
                        'app/features/searchHistory',
                        './src/features/searchHistory',
                    ],
                    [
                        'app/features/searchWeather',
                        './src/features/searchWeather',
                    ],
                    ['app/features/layout', './src/features/layout'],
                    ['app/features/theme', './src/features/theme'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
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
                        pattern: '{**,.}/*.scss',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'never',
            },
        ],
    },
};
