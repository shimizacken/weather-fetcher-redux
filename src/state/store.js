import { createStore } from 'redux';
import { reducers } from 'app/reducers';
import { middlewares } from '../middlewares';
import { getPersistedHistoryList } from '../services/ui/searchHistory';
import { getPersistedTheme } from '../services/ui/theme';

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  // console.log('funcs', ...funcs);

  return funcs.reduce(function callback(a, b, index) {

    console.log(index);
    // console.log('accumulator', a);
    // console.log('currentValue', b);
    // console.log('funcs', funcs);

      return function next(...args) {
      
        // console.log('accumulator', a);
        // console.log('currentValue', b);
        // console.log('args', ...args);
        // console.log('b', b);
        const exec1 = b(...args);
        // console.log('a', a);
        const exec2 = a(exec1);

        console.log('exec b', exec1);
        console.log('exec a(b)', exec2);

        return exec2;
      }
    }
  );
}

function myApplyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    let dispatch = store.dispatch;

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    // console.log('chain', chain);
    window.chain = chain;
    
    const composed = compose(...chain);
    console.dir(composed);
    
    dispatch = composed(store.dispatch);
    window.dispatch = dispatch;
    // console.log('dispatch', dispatch)

    const results = {
      ...store,
      dispatch
    };
    
    return results;
  }
}


const initialState = {
  searchHistory: getPersistedHistoryList(),
  themeType: getPersistedTheme()
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(reducers, initialState, composeEnhancers(myApplyMiddleware(...middlewares)));

export { store };
