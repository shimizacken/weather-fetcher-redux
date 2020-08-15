# ⛅️ weather-fetcher ☔️

Simple web app for displaying the weather based on a city name. It's a `React`
based and made usage of [`openweathermap.org`](https://www.openweathermap.org/)
api. Originally it was written in
[MobX](https://github.com/shimizacken/weather-fetcher-mobx) and rewritten into
`Redux`.

This project started as part of interview exam. Later it was expanded and now
it's main purpose is educational.

<div align="center">
    <img src="src/assets/png/wf-logo.png" />
</div>

## Table of Content

-   [Demo](#demo)
    -   [Weather fetcher](#weather-fetcher)
    -   [Storybook](#storybook)
-   [What’s Included?](#whats-included?)
    -   [Test](#test)
-   [Feature Folder Structure](#feature-folder-structure)
-   [Naming conventions](#naming-conventions)
-   [Usage](#usage)
-   [Alias paths](#alias-paths)
-   [Road map](#road-map)

## Demo

#### Weather fetcher

<a href="https://weather-fetcher.netlify.com" target="_blank">https://weather-fetcher.netlify.com</a>

#### Storybook

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

## Feature Folder Structure

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

## Naming conventions

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

## Usage

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

# Alias paths

In order to make alias paths works on `TypeScript` project, there's 3 actions
that should be taken. Those actions is involves with packages installation and
some configure. It's recommended to do it in the following order:

1.  Configure `webpack.config.js`
2.  Configure `tsconfig.json`
3.  Configure `.eslintrc.js`

Each configuration have different meaning and purposes.

### Webpack alias

The webpack alias configuration purpose is resolving the alias path into the
actual path. So when the application is builded, both in development and
production modes, the paths are resolved to the actual paths.

Read more about Webpack
[`resolve.alias`](https://webpack.js.org/configuration/resolve/#resolvealias)

### TypeScript configuration

TypeScript configuration purpose is to make alias paths to be autocompleted in
`TypeScript` project. without it the autocomplete will auto generate the actual
path.

Read more about TypeScript's
[`path-mapping`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)

### eslint configuration

eslint configuration purpose is to make alias paths recognizable for the linting
process. If that not configured, the alias paths still working, but `eslint`
will show resolve error.

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

`eslint` is not resolving alias paths out of the box, therefore a 3rd parties
are needed. The best choses I found was
[`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) and
[`eslint-import-resolver-alias`](eslint-import-resolver-alias). Example:

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

## Road map

-   [ ] Rewrite into `TypeScript`
        ([on progress](https://github.com/shimizacken/weather-fetcher/tree/type-script))
-   [ ] More screens/routing
-   [ ] Translations
-   [ ] History page
-   [ ] Forecast
-   [ ] Open street map view
-   [ ] Graphs
-   [ ] Personalization
-   [x] Location detection

### License

[MIT License](LICENSE)
