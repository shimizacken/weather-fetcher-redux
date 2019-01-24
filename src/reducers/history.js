import { ADD_TO_SEARCH_HISTORY } from '../constants';

const initialState = [];

const addToHistoryList = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_TO_SEARCH_HISTORY:
            return action.tempType
    default:
        return state
  }
}
export { addToHistoryList };