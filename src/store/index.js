import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../middlewares';

const getHistoryList = () => {

    const historyList = window.localStorage.getItem('_history_list_');

    if (historyList) {
        return JSON.parse(historyList);
    }
}

const initialState = {
    historyList: getHistoryList()
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares));

window.STORE = store;

export default store;