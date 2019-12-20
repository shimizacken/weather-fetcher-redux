import thunk from 'redux-thunk';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from '../features/theme/state/themeTypeMiddleware';
import { logMiddleware } from './logMiddleware';

export const middlewares = [thunk, historyListMiddleware, themeTypeMiddleware];
