import { logMiddeleware } from './logMiddeleware';
import { fetchWeatherMiddleware } from './fetchWeatherMiddleware';
import { historyListMiddleware } from './historyListMiddleware';

const middlewares = [
    logMiddeleware,
    fetchWeatherMiddleware,
    historyListMiddleware
];

export { middlewares };