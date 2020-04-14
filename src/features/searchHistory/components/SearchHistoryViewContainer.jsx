import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { HistoryTable } from './historyTable/HistoryTable';
import { selectSortedSearchHistory } from '../state/searchHistorySelectors';
import style from './SearchHistoryViewContainer.module.scss';

export const SearchHistoryViewContainer = () => {
  const searchHistory = useSelector(selectSortedSearchHistory);

  if (!searchHistory) {
    return null;
  }

  return (
    <div className={style.searchHistoryWrapper}>
      <HistoryTable items={searchHistory} />
    </div>
  );
};

SearchHistoryViewContainer.propTypes = {
  searchHistory: PropTypes.array
};
