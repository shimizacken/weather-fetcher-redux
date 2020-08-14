import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {selectSortedSearchHistory} from '../state/searchHistorySelectors';

import {HistoryTable} from './historyTable/HistoryTable';

import {BackButton} from 'app/components/common';

import style from './SearchHistoryViewContainer.module.scss';

export const SearchHistoryViewContainer = () => {
    const searchHistory = useSelector(selectSortedSearchHistory);

    if (!searchHistory) {
        return null;
    }

    return (
        <div className={style.searchHistoryWrapper}>
            <div className={style.toolBar}>
                <BackButton />
                <h1>Search history</h1>
            </div>
            {searchHistory?.length > 0 ? (
                <HistoryTable items={searchHistory} />
            ) : (
                <div style={{marginTop: 35}}>There is no searches to show!</div>
            )}
        </div>
    );
};

SearchHistoryViewContainer.propTypes = {
    searchHistory: PropTypes.array,
};
