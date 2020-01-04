import thunk from 'redux-thunk';
import { historyListMiddleware } from 'app/features/searchHistory';
import { themeTypeMiddleware } from 'app/features/theme/state/themeTypeMiddleware';

export const middlewares = [
    thunk,
    historyListMiddleware,
    themeTypeMiddleware
];
