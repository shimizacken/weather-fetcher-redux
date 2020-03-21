import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { historyListMiddleware } from 'app/features/searchHistory';
import { themeTypeMiddleware } from 'app/features/theme';
import { pending, success, error } from './constants';

const promise = createPromise({
  promiseTypeSuffixes: [pending, success, error]
});

export const middlewares = [thunk, promise, historyListMiddleware, themeTypeMiddleware];
