const alias = require('./webpack/webpack.config');

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ]
};


// module.exports = {
//   env: {
//     browser: true,
//     es2017: true
//   },
//   parser: '@typescript-eslint/parser',
//   plugins: ['react', 'react-hooks', '@typescript-eslint'],
//   extends: [
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     // 'airbnb'
//   ],
//   parserOptions: {
//     project: ['./tsconfig.json'],
//     tsconfigRootDir: __dirname,
//     ecmaVersion: 2018,
//     sourceType: 'module'
//   },
//   rules: {
//     'comma-dangle': ['error', 'never'],
//     'linebreak-style': ['error', 'unix'],
//     quotes: ['error', 'single'],
//     semi: ['error', 'always'],
//     'no-unused-vars': ['warn'],
//     'no-console': 0,
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
//     indent: ['error', 2, { ignoredNodes: ['JSXElement'] }],
//     // FIXME: Fix the rules below
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off'
//   },
//   settings: {
//     react: {
//       version: 'detect'
//     },
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx']
//     },
//     'import/resolver': {
//       webpack: {
//         config: {
//           resolve: {
//             alias,
//             extensions: ['.js', '.jsx', '.ts', '.tsx']
//           }
//         }
//       },
//       typescript: {
//         directory: './tsconfig.json',
//         alwaysTryTypes: true
//       }
//     }
//   }
// };
