import { fetchWeatherMiddleware } from './fetchWeatherMiddleware';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from './themeTypeMiddleware';

const middlewares = [fetchWeatherMiddleware, historyListMiddleware, themeTypeMiddleware];

export { middlewares };
