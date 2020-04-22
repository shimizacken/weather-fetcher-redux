import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'app/components/common';
import { RemoveHistoryModalContainer } from '../RemoveHistoryModalContainer';
import { HistoryTableRowRenderer } from './HistoryTableRowRenderer';
import { historyTableColumnsBuilder, historyTableHeadersBuilder } from '../../bll/historyTableColumnsBuilder';
import { HistoryTableHeaderRenderer } from './HistoryTableHeaderRenderer';
import style from './HistoryTable.module.scss';

export const HistoryTable = ({ items }) => {
  const headers = historyTableHeadersBuilder();
  const rows = historyTableColumnsBuilder(items);

  return (
    <div className={style.historyTableWrapper} data-cy="history-table">
      <RemoveHistoryModalContainer />
      <div>
        <Table
          headers={headers}
          items={rows}
          tableClassName={style.table}
          columnClassName={style.column}
          headerRenderer={HistoryTableHeaderRenderer}
          rowRenderer={HistoryTableRowRenderer}
        />
      </div>
    </div>
  );
};

HistoryTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape())
};
