let state = {};
let lastCalledActions = [];

// TODO: Handle function actions (thunk)
const addLastCalledAction = (action) => {
  const actionType = action && action.type
    ? action.type
    : 'CANT_RESOLVE_TYPE';

  lastCalledActions.push(actionType);
};

const store = {
  getState: jest.fn(() => state),
  dispatch: jest.fn(addLastCalledAction),
  injectState: ((newState) => {
    state = newState;
  }),
  lastCalledActions,
  reset: jest.fn(() => {
    lastCalledActions = [];
    state = {};
  })
};

export { store };
