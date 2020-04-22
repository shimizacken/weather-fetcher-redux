import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'app/components/common/table/Column';
import { Row } from 'app/components/common/table/Row';
import styles from './HistoryTableRowRenderer.module.scss';

export const HistoryTableRowRenderer = ({ row, width }) => {
  const columns = row?.map(column => {
    if (column.name === 'id') {
      return null;
    }

    return (
      <Column
        key={column.id}
        width={width}
        value={<span className={styles.text}>{column.value}</span>}
        className={styles.column}
      />
    );
  });

  return <Row>{columns}</Row>;
};

HistoryTableRowRenderer.propTypes = {
  row: PropTypes.arrayOf(PropTypes.shape()),
  width: PropTypes.number
};

HistoryTableRowRenderer.defaultProps = {
  row: undefined,
  width: undefined
};
