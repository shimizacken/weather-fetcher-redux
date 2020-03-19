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
- Rewrite into `TypeScript` [on progress]()
- Add more screens and a router

## Usage
### Method 1 (recommended)
Download the artifact from the [`bin`](https://github.com/shimizacken/weather-fetcher/blob/master/bin/weather-fetcher.zip) folder, extract it, and open the `index.html` file in the browser. It does not requires a web server

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
#### Default
![Default view](src/assets/screenshots/p1.png "Default view")

#### Mobile
![Small screens](src/assets/screenshots/p2.png "Small screen")

#### Dark mode
![Small screens](src/assets/screenshots/p3.png "Small screen")