import thunk from 'redux-thunk';
import { historyListMiddleware } from 'app/features/searchHistory';
import { themeTypeMiddleware } from 'app/features/theme';

export const middlewares = [thunk, historyListMiddleware, themeTypeMiddleware];
