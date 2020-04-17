import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const headerItems = ['City Name', 'Country', 'Temperature', 't', 'description', 'Date'];

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
      <Table headerItems={headerItems} rowItems={items} />
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
