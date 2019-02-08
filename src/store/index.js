import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../middlewares';
import { getPersistedHistoryList } from '../services/ui/searchHistory';
import { getPersistedTheme } from '../services/ui/theme';

const initialState = {
    searchHistory: getPersistedHistoryList(),
    themeType: getPersistedTheme()
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

window.STORE = store;

export default store;