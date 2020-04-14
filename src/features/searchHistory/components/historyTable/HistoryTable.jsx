import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Row } from 'app/components/common';
import { removeItemFromHistoryList, removeItemFromHistoryListEnded } from '../../state/searchHistoryActions';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const dispatch = useDispatch();

  //   const removeItem = id => {
  //     dispatch(removeItemFromHistoryList(id));
  //     dispatch(removeItemFromHistoryListEnded());
  //   };

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      {items?.map(item => (
        <Row key={item.id}>
          <div className={style.rowContentWrapper}>
            <div>{item.name}</div>
            <div>{item.country}</div>
            <div>{item.temperature}</div>
            {/* <div>{item.tempType}</div> */}
            <div>{item.icon}</div>
            <div>{item.currentWeather}</div>
            <div>{item.date}</div>
          </div>
        </Row>
      ))}
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
