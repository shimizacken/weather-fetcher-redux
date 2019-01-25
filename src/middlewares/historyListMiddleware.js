import { END_ADD_TO_SEARCH_HISTORY, END_REMOVE_ITEM_FROM_HISTORY } from "../constants";

export const historyListMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type === END_ADD_TO_SEARCH_HISTORY
            || action.type === END_REMOVE_ITEM_FROM_HISTORY) {
        
        window.localStorage.setItem('_history_list_', JSON.stringify(getState().historyList));
    }

    return next(action);
};