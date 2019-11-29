export const getPersistedHistoryList = () => {
  const searchHistory = window.localStorage.getItem('_history_list_');

  if (searchHistory) {
    const array = JSON.parse(searchHistory);

    return array.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
  }
};
