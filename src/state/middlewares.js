import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { weatherMiddleware } from 'app/features/searchWeather';
import { themeTypeMiddleware } from 'app/features/theme';
import { pending, success, error } from './constants';

const promise = createPromise({
  promiseTypeSuffixes: [pending, success, error]
});

export const middlewares = [thunk, promise, weatherMiddleware, themeTypeMiddleware];
