import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import { HistoryTableRowRenderer } from './HistoryTableRowRenderer';
import { historyTableColumnsBuilder } from '../../bll/historyTableColumnsBuilder';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const headerItems = ['City Name', 'description', 'Temperature', 'Icon', 'Date'];
  const rows = historyTableColumnsBuilder(items);

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
      <div>
        <Table
          headerItems={headerItems}
          items={rows}
          tableClassName={style.table}
          columnClassName={style.column}
          rowRenderer={HistoryTableRowRenderer}
        />
      </div>
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
