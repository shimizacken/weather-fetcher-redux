import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../middlewares';
import { getHistoryList } from '../services/ui/historyList';

const initialState = {
    historyList: getHistoryList()
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares));

window.STORE = store;

export default store;