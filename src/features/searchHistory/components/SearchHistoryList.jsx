import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItemFromHistoryList, removeItemFromHistoryListEnded } from '../state/searchHistoryActions';
import { HistoryItem } from './HistoryItem';
import style from './SearchHistory.scss';

export const SearchHistoryList = ({ items }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeItemFromHistoryList(id));
    dispatch(removeItemFromHistoryListEnded());
  };

  return (
    <div className={style.listItemInnerWrapper} data-cy="history-list">
      {items?.map((item) => (
        <HistoryItem
          key={item.id}
          id={item.id}
          name={item.name}
          country={item.country}
          temperature={item.temperature}
          tempType={item.tempType}
          icon={item.icon}
          currentWeather={item.currentWeather}
          date={item.date}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

SearchHistoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
