import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../middlewares';
import { getPersistedHistoryList } from '../services/ui/searchHistory';
import { getPersistedTheme } from '../services/ui/theme';

const initialState = {
    searchHistory: getPersistedHistoryList(),
    themeType: getPersistedTheme()
};

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);


export default store;