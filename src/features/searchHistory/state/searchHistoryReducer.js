import { ADD_TO_SEARCH_HISTORY, REMOVE_ITEM_FROM_HISTORY } from '../../../constants';

const initialState = [];

export const searchHistory = (state = initialState, action) => {
  if(action.type === ADD_TO_SEARCH_HISTORY) {
      return [...state, action.history];
  }
  
  if(action.type === REMOVE_ITEM_FROM_HISTORY) {
      return state.filter(item => item.id !== action.id);
  }

  return state;
};
