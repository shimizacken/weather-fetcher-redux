const path = require('path');
const appFolderPath = path.resolve(__dirname, '../src/');
const CSSModuleLocalIdent = '[local]--[hash:base64:5]';
const cssEnableModuleOptions = {
  modules: true,
  localIdentName: CSSModuleLocalIdent,
  sourceMap: true,
  camelCase: true
};

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions'
  ],
  webpackFinal: async config => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.scss$/,
      include: appFolderPath,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: cssEnableModuleOptions
        },
        'sass-loader'
      ]
    });

    rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ],
      include: path.resolve(__dirname, '../src/')
    });

    return config;
  },
};
