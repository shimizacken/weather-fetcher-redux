import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SearchHistoryList } from './SearchHistoryList';
import { selectSortedSearchHistory } from '../state/searchHistorySelectors';
import style from './SearchHistory.scss';

export const SearchHistoryContainer = () => {
  const searchHistory = useSelector(selectSortedSearchHistory);

  if (!searchHistory) {
    return null;
  }

  return (
    <div className={style.searchHistoryPanel}>
      <div className={style.header}>
        <h4 data-cy="search-history-length">History ({searchHistory.length})</h4>
      </div>
      <SearchHistoryList items={searchHistory} />
    </div>
  );
};

SearchHistoryContainer.propTypes = {
  searchHistory: PropTypes.array
};
