import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Row } from 'app/components/common';
import { removeItemFromHistoryList, removeItemFromHistoryListEnded } from '../../state/searchHistoryActions';
import style from './HistoryTable.module.scss';
import { ConfirmationModal } from 'app/components/common';

export const HistoryTable = ({ items }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const clearAll = () => {
    setOpen(true);
  };

  const close = () => setOpen(false);

  //   const removeItem = id => {
  //     dispatch(removeItemFromHistoryList(id));
  //     dispatch(removeItemFromHistoryListEnded());
  //   };

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <Button text="clear all" onClick={clearAll} />
      <ConfirmationModal title="Clear all history list" open={open} close={close} />
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
