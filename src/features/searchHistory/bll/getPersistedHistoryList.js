import { historyListLocalStorageKey } from 'app/features/searchHistory/bll/historyListStorageKey';

export const getPersistedHistoryList = () => {
  const searchHistory = window.localStorage.getItem(historyListLocalStorageKey);

  if (searchHistory) {
    const array = JSON.parse(searchHistory);

    return array.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
  }
};
