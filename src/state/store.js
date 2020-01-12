import { createStore, compose, applyMiddleware } from 'redux';
import { getPersistedHistoryList } from 'app/services/localStorage/getPersistedHistoryList';
import { reducers } from './reducers';
import { middlewares } from './sharedMiddlewares';

const initialState = {
  searchHistory: getPersistedHistoryList()
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));

export { store };
