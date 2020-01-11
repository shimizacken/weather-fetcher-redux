import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItemFromHistoryList, removeItemFromHistoryListEnded } from './state/searchHistoryActions';
import { HistoryItem } from './HistoryItem';
import style from './style.scss';

export const SearchHistoryList = ({ items }) => {
  const dispatch = useDispatch();

  const removeItem = id => {
    dispatch(removeItemFromHistoryList(id));
    dispatch(removeItemFromHistoryListEnded());
  };

  return (
    <div className={style.listItemInnerWrapper}>
      {items?.map(item => (
        <HistoryItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};

SearchHistoryList.protoTypes = {
  items: PropTypes.shape()
};

SearchHistoryList.protoTypes = {
  items: []
};
