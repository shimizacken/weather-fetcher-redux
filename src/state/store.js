import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './shared/reducers';
import { middlewares } from './shared/sharedMiddlewares';
import { getPersistedHistoryList } from './bll/getPersistedHistoryList';

const initialState = {
  searchHistory: getPersistedHistoryList()
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));

export { store };
