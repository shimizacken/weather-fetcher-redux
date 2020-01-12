import { store } from '../store';

const createFakedMiddleware = (middleware, state = {}) => {
  store.injectState(state);

  const next = jest.fn();

  const invoke = action => middleware(store)(next)(action);

  return {
    store,
    next,
    invoke
  };
};

export { createFakedMiddleware };
