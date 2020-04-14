import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
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
