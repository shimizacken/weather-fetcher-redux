import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { logMiddeleware } from '../middlewares';

const store = createStore(reducers, applyMiddleware(logMiddeleware));

window.STORE = store;

export default store;