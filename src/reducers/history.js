import { ADD_TO_SEARCH_HISTORY } from '../constants';

const initialState = [];

const historyList = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_TO_SEARCH_HISTORY:
            return [...state, action.history];
    default:
        return state
  }
}
export { historyList };