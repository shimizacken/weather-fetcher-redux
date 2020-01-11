module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "react-hooks"
    ],
    "rules": {
            // https://eslint.org/docs/rules
            // https://github.com/airbnb/javascript/blob/90235cab7c060d69430001cf17aa28ff74da86b4/packages/eslint-config-airbnb-base/rules
            // https://github.com/airbnb/javascript/tree/90235cab7c060d69430001cf17aa28ff74da86b4/packages/eslint-config-airbnb/rules
            'class-methods-use-this': 0,
            'comma-dangle': ['error', 'never'],
            'default-case': 0,
            'eol-last': ['error', 'always'],
            eqeqeq: ['warn', 'always'],
            'func-names': 0,
            'import/prefer-default-export': 0,
            indent: [
              'error',
              2,
              {
                SwitchCase: 1
              }
            ],
            'jsx-a11y/anchor-is-valid': [
              'error',
              {
                components: ['Link'],
                specialLink: ['url']
              }
            ],
            'linebreak-style': ['error', 'unix'],
            'lines-between-class-members': ['error', 'always'],
            'max-len': 0, //["warn", { "code": 120 , ignoreComments: true}],
            'no-console': ['warn'],
            'no-constant-condition': [
              'error',
              {
                checkLoops: false
              }
            ],
            'no-multiple-empty-lines': [
              'error',
              {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
              }
            ], // For some reason maxEOF have to be 0 to allow max 1 newline
            'no-param-reassign': [
              'error',
              { ignorePropertyModificationsFor: ['draft'] }
            ],
            'no-plusplus': 0,
            'no-restricted-syntax': [
              // airbnb config except allow for .. in loop (https://github.com/airbnb/javascript/blob/a100a3957ffb11c841dbd74a649cbb9b5a17a2aa/packages/eslint-config-airbnb-base/rules/style.js)
              'error',
              {
                selector: 'ForOfStatement',
                message:
                  'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
              },
              {
                selector: 'LabeledStatement',
                message:
                  'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
              },
              {
                selector: 'WithStatement',
                message:
                  '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
              }
            ],
            'no-underscore-dangle': 0,
            'no-unused-vars': 'error',
            'object-curly-newline': 'off',
            'operator-linebreak': 'off',
            'prefer-const': 'error',
            'prefer-destructuring': 0,
            'react/button-has-type': 'off', // "error"
            'react/destructuring-assignment': 'off', // ["error", "always"]
            'react/default-props-match-prop-types': 0, // Disabled to prevent incorrect error when using spread operator
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-space-before-closing': 0,
            'react/jsx-tag-spacing': 'error',
            'react/no-access-state-in-setstate': 'off', // ["error", "always"]
            'react/no-unknown-property': [
              'error',
              {
                ignore: ['class']
              }
            ],
            'react/no-unused-prop-types': 'error',
            'react/prefer-stateless-function': 0,
            'react/prop-types': 0,
            'react/self-closing-comp': [
              'error',
              {
                component: true,
                html: false
              }
            ],
            'react/sort-comp': [
              'error',
              {
                order: [
                  'static-methods',
                  'instance-variables',
                  'lifecycle',
                  '/^get.+$/',
                  '/^on.+$/',
                  '/^handle.+$/',
                  'everything-else',
                  '/^render.+$/',
                  'render'
                ]
              }
            ],
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
}