module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: false,
    jsxBracketSameLine: false,
    printWidth: 80,
    proseWrap: 'always',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,

    overrides: [
        {
            files: ['*.scss.d.ts'],
            options: {
                quoteProps: 'preserve',
                tabWidth: 4,
            },
        },
    ],
};
