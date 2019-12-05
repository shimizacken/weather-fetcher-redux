import { fetchWeatherMiddleware } from './fetchWeatherMiddleware';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from '../features/theme/state/themeTypeMiddleware';

const middlewares = [fetchWeatherMiddleware, historyListMiddleware, themeTypeMiddleware];

export { middlewares };
