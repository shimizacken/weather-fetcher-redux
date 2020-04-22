import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../../../../components/common/table/Column';
import { Row } from '../../../../components/common/table/Row';

export const HistoryTableRowRenderer = ({ row, width, columnClassName }) => {
  const columns = row?.map(column => {
    if (column.name === 'id') {
      return null;
    }

    return <Column key={column.id} width={width} value={column.value} className={columnClassName} />;
  });

  return <Row>{columns}</Row>;
};

HistoryTableRowRenderer.propTypes = {
  row: PropTypes.arrayOf(PropTypes.shape()),
  width: PropTypes.number,
  columnClassName: PropTypes.string
};

HistoryTableRowRenderer.defaultProps = {
  row: undefined,
  width: undefined,
  columnClassName: undefined
};
