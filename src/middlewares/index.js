import thunk from 'redux-thunk';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from '../features/theme/state/themeTypeMiddleware';

const middlewares = [thunk, historyListMiddleware, themeTypeMiddleware];

export { middlewares };
