import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { logMiddeleware } from '../middlewares/logMiddeleware';
import { fetchWeatherMiddleware } from '../middlewares/fetchWeatherMiddleware';

const store = createStore(reducers, applyMiddleware(logMiddeleware, fetchWeatherMiddleware));

window.STORE = store;

export default store;