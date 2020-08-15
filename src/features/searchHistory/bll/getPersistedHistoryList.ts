import {HistoryItem} from './historyListType';
import {historyListLocalStorageKey} from 'app/features/searchHistory';

export const sortHistoryList = (historyList: HistoryItem[]) => {
    return historyList?.sort((a, b) => b.date - a.date);
};

export const getPersistedHistoryList = () => {
    const searchHistory = window.localStorage.getItem(
        historyListLocalStorageKey
    );

    if (searchHistory) {
        return JSON.parse(searchHistory);
    }
};
