import { ADD_TO_SEARCH_HISTORY, REMOVE_ITEM_FROM_HISTORY } from '../constants';

const initialState = [];

const searchHistory = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SEARCH_HISTORY:
      return [...state, action.history];
    case REMOVE_ITEM_FROM_HISTORY:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
export { searchHistory };
