import thunk from 'redux-thunk';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from '../features/theme/state/themeTypeMiddleware';

export const middlewares = [thunk, historyListMiddleware, themeTypeMiddleware];
