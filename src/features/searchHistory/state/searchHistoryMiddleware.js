import { END_REMOVE_ITEM_FROM_HISTORY } from './constants';

export const searchHistoryMiddleware = ({ getState }) => next => action => {
  if (action.type === END_REMOVE_ITEM_FROM_HISTORY) {
    window.localStorage.setItem('_history_list_', JSON.stringify(getState().searchHistory));
  }

  return next(action);
};
