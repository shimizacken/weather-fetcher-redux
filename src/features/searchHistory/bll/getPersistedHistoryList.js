import { historyListLocalStorageKey } from 'app/features/searchHistory/bll/historyListStorageKey';

export const sortHistoryList = (historyList) => {
  return historyList.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPersistedHistoryList = () => {
  const searchHistory = window.localStorage.getItem(historyListLocalStorageKey);

  if (searchHistory) {
    const array = JSON.parse(searchHistory);

    return sortHistoryList(array);
  }
};
