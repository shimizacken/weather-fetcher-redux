const commonReducer = (state, actions, action) => {
  if (actions.includes(action.type)) {
    const { ...actionPayload } = action;

    return {
      ...state,
      ...actionPayload
    };
  }

  return state;
};

export { commonReducer };
