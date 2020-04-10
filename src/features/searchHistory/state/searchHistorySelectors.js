import { createSelector } from 'reselect';
import { sortHistoryList } from '../bll/getPersistedHistoryList';

export const selectSearchHistory = state => state?.searchHistory;

export const selectSortedSearchHistory = createSelector(selectSearchHistory, searchHistory => {
  return sortHistoryList(searchHistory);
});
