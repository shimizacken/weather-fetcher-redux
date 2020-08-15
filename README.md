# ⛅️ weather-fetcher-redux ☔️

Simple web app for displaying the weather based on a city name. It's a `React`
based and made usage of [`openweathermap.org`](https://www.openweathermap.org/)
api. Originally it was written in
[MobX](https://github.com/shimizacken/weather-fetcher) and rewritten into
`Redux`.

This project started as part of interview exam. Later it was expanded and now
it's main purpose is educational.

<div align="center">
    <img src="src/assets/png/wf-logo.png" />
</div>

## Live demo

<a href="https://weather-fetcher.netlify.com" target="_blank">https://weather-fetcher.netlify.com</a>

## Storybook

<a href="https://weather-fetcher.netlify.com/sb/" target="_blank">https://weather-fetcher.netlify.com/sb/</a>

## What’s Included?

-   [React](http://reactjs.org)
-   [Redux](https://redux.js.org)
-   [SCSS](https://sass-lang.com)
-   [eslint](https://eslint.org)
-   [webpack](https://webpack.js.org)
-   [Storybook](https://storybook.js.org)

### Test

-   Unit tests with [`Jest`](https://jestjs.io/)
-   E2E tests with [`Cypress.io`](https://www.cypress.io/)

## Road map

-   Rewrite into `TypeScript`
    ([on progress](https://github.com/shimizacken/weather-fetcher-redux/tree/type-script))
-   More screens and a router
-   Translations
-   History page
-   Open street map view
-   Graphs
-   Personalization
-   Location detection

### Feature Folder Structure

```
├── src
│   ├──features
│   │   └── searchWeather
│   │       ├── bll
│   │       ├── components
│   │       ├── state
│   │       └── index.js
│   └── ...
└── ...
```

## File naming conventions

| type                | filename                      | suffix  | examples              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| component           | PascalCase                    | \*.jsx  | MyComponent.jsx       |
| component folder    | camelCase                     | -       | myComponent           |
| vanilla JS          | camelCase                     | \*.js   | userStoreValidator.js |
| component test file | camelCase and dot             | \*.js   | myButton.test.js      |
| json                | camelCase                     | \*.json | packageSettings.json  |
| component's scss    | PascalCase                    | \*.scss | MyControls.scss       |
| partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| image               | dash-separated                | \*.png  | logo-icon.png         |
| svg                 | dash-separated                | \*.svg  | logo-icon.svg         |

## Building and Running the application

For run the unit-tests of the application, run: and then:

```bash
npm test
```

or for running `jest` in watch mode

```bash
npm run jest-watch
```

For running `storybook`

```bash
npm run storybook
```

For running `cypress.io` in development mode

```bash
npm run cypress:open
```

or in CI mode

```bash
npm run cypress:ci
```

## How to run?

### Method 1 (recommended)

Download the artifact from the
[`bin`](https://github.com/shimizacken/weather-fetcher-redux/blob/master/bin/weather-fetcher-latest.zip)
folder, extract it, and open the `index.html` file in the browser. It does not
requires a web server

### Method 2

Clone the repo

```bash
git clone https://github.com/shimizacken/weather-fetcher-redux.git
```

then run the following command in the root folder:

```bash
npm install
```

and then run:

```bash
npm start
```

# Alias paths

-   `webpack.config.js`
-   `tsconfig.json`
-   `.eslintrc.js`

## Webpack alias

The webpack alias resolver defines prefix and resolve path:

```js
const alias = {
    app: path.resolve(__dirname, './src'), // webpack config relative to `src` folder
};
```

So for every path that start with `app` will be resolved as `./src`, example:

```js
import {sum} from 'app/utils/sum'; // './src/utils/sum'

import {Button} from 'app/components/common/Button'; // './src/components/common/Button'
```

## tsconfig.json

Path mapping The `paths` key of `tsconfig.json` which will be resolved relative
to the `baseUrl`. It used for autocomplete the alias paths.

Example:

```js
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "app/utils/sum": ["./src/utils/sum"], // This mapping is relative to "baseUrl"
      "app/components/common/Button": ["./src/components/common/Button"],
    }
  }
}
```

## .eslintrc.js

`eslint` is also need to resolve alias paths. In order to do so in `TypeScript`
project, we can use `eslint-import-resolver-alias` and add it to the
`.eslintrc.js` `setting` section, example:

```js
settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [
                    ['app/utils/sum', '/src/utils/sum'],
                    ['app/components/common/Button', './src/components/common/Button'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
            },
        },
    },
```

<!-- ![Default view](src/assets/screenshots/wf-2.gif 'Default view') -->

### License

[MIT License](LICENSE)
