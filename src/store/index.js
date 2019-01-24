import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { logMiddeleware, fetchWeatherMiddleware } from '../middlewares';

const store = createStore(reducers, applyMiddleware(logMiddeleware, fetchWeatherMiddleware));

window.STORE = store;

export default store;