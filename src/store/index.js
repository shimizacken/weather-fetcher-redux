import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../middlewares';
import { getHistoryList as getPersistedHistoryList } from '../services/ui/historyList';
import { getPersistedTheme } from '../services/ui/theme';

const initialState = {
    historyList: getPersistedHistoryList(),
    themeType: getPersistedTheme()
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares));

window.STORE = store;

export default store;