import { logMiddeleware } from './logMiddeleware';
import { fetchWeatherMiddleware } from './fetchWeatherMiddleware';
import { historyListMiddleware } from './historyListMiddleware';
import { themeTypeMiddleware } from './themeTypeMiddleware';

const middlewares = [logMiddeleware, fetchWeatherMiddleware, historyListMiddleware, themeTypeMiddleware];

export { middlewares };
