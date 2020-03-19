# ⛅️ weather-fetcher-redux ☔️
Simple web app for displaying the weather based on a city name. It's a `React` based and made usage of [`openweathermap.org`](https://www.openweathermap.org/) api. Originally it was written in [MobX](https://github.com/shimizacken/weather-fetcher) and rewritten into `Redux`.

This project started as part of interview exam. Later it was expanded and now it's main purpose is educational.

### What's in it?
#### What’s Included?
- React
    - Functional components
    - Hooks
- `Redux`
- `SCSS` modules
- `eslint`
- `webpack`
#### Feature Folder Structure
```
src
└──features
    └── searchWeather
        ├── bll
        ├── components
        ├── state
        └── index.js
```

#### Test
- Unit tests with [`Jest`](https://jestjs.io/)
- E2E tests with [`Cypress.io`](https://www.cypress.io/)

### Road map
- Rewrite into `TypeScript` ([on progress](https://github.com/shimizacken/weather-fetcher-redux/tree/type-script))
- Add [`Storybook`](https://storybook.js.org)
- Add more screens and a router

### How to run?
#### Method 1 (recommended)
Download the artifact from the [`bin`](https://github.com/shimizacken/weather-fetcher-redux/blob/master/bin/weather-fetcher-latest.zip) folder, extract it, and open the `index.html` file in the browser. It does not requires a web server

#### Method 2  
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
### Screenshots
#### Default
![Default view](src/assets/screenshots/wf.gif "Default view")