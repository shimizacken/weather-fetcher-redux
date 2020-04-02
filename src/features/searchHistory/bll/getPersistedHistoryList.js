import { historyListLocalStorageKey } from 'app/features/searchHistory/bll/historyListStorageKey';

export const sortHistoryList = (historyList) => {
  return historyList?.sort((a, b) => b.date - a.date);
};

export const getPersistedHistoryList = () => {
  const searchHistory = window.localStorage.getItem(historyListLocalStorageKey);

  if (searchHistory) {
    return JSON.parse(searchHistory);
  }
};
