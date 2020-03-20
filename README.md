# ⛅️ weather-fetcher-redux ☔️
Simple web app for displaying the weather based on a city name. It's a `React` based and made usage of [`openweathermap.org`](https://www.openweathermap.org/) api. Originally it was written in [MobX](https://github.com/shimizacken/weather-fetcher) and rewritten into `Redux`.

This project started as part of interview exam. Later it was expanded and now it's main purpose is educational.

## What’s Included?
- [React](http://reactjs.org)
- [Redux](https://redux.js.org)
- [SCSS](https://sass-lang.com)
- [eslint](https://eslint.org)
- [webpack](https://webpack.js.org)
- [Storybook](https://storybook.js.org)

### Test
- Unit tests with [`Jest`](https://jestjs.io/)
- E2E tests with [`Cypress.io`](https://www.cypress.io/)

## Road map
- Rewrite into `TypeScript` ([on progress](https://github.com/shimizacken/weather-fetcher-redux/tree/type-script))
- Add more screens and a router
- Add translations

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

|type|filename|suffix|examples|
|----|---|---|---|
|component|PascalCase|*.jsx|MyComponent.jsx
|component folder|camelCase| - |myComponent
|vanilla JS|camelCase|*.js|userStoreValidator.js
|component test file|camelCase and dot|*.js|myButton.test.js
|json|camelCase|*.json|packageSettings.json
|component's scss|PascalCase|*.scss|MyControls.scss
|partial scss|low dash prefix and camelCase|*.scss|_variables.scss
|image|dash-separated|*.png|logo-icon.png
|svg|dash-separated|*.svg|logo-icon.svg

## Building and Running the application
For run the unit-tests of the application, run:
and then:
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
Download the artifact from the [`bin`](https://github.com/shimizacken/weather-fetcher-redux/blob/master/bin/weather-fetcher-latest.zip) folder, extract it, and open the `index.html` file in the browser. It does not requires a web server

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

![Default view](src/assets/screenshots/wf.gif "Default view")