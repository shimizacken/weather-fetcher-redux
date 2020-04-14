import { END_REMOVE_ITEM_FROM_HISTORY, CLEAR_ALL_SEARCH_HISTORY } from './constants';
import { historyListLocalStorageKey } from 'app/features/searchHistory/bll/historyListStorageKey';

export const searchHistoryMiddleware = ({ getState }) => next => action => {
  if (action.type === END_REMOVE_ITEM_FROM_HISTORY) {
    window.localStorage.setItem(historyListLocalStorageKey, JSON.stringify(getState().searchHistory));
  }

  if (action.type === CLEAR_ALL_SEARCH_HISTORY) {
    window.localStorage.removeItem(historyListLocalStorageKey);
  }

  return next(action);
};
