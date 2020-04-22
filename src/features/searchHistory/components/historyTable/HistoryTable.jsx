import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import { historyTableRowRenderer } from '../../bll/historyTableRowRenderer';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const headerItems = ['City Name', 'description', 'Temperature', 'Icon', 'Date'];

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
      <div>
        <Table
          headerItems={headerItems}
          items={items}
          tableClassName={style.table}
          columnClassName={style.column}
          rowRenderer={historyTableRowRenderer}
        />
      </div>
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
