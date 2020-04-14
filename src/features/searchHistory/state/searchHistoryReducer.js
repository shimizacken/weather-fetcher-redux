import { SET_SEARCH_HISTORY, REMOVE_ITEM_FROM_HISTORY, CLEAR_ALL_SEARCH_HISTORY } from './constants';

const initialState = [];

export const searchHistory = (state = initialState, action) => {
  if (action.type === SET_SEARCH_HISTORY) {
    return [...state, action.history];
  }

  if (action.type === REMOVE_ITEM_FROM_HISTORY) {
    return state.filter(item => item.id !== action.id);
  }

  if (action.type === CLEAR_ALL_SEARCH_HISTORY) {
    return initialState;
  }

  return state;
};
