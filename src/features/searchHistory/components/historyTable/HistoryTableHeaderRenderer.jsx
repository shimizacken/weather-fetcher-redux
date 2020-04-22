import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'app/components/common/table/Column';

export const HistoryTableHeaderRenderer = ({ headers, width, columnClassName }) =>
  headers?.map(headerName => <Column key={headerName} width={width} value={headerName} className={columnClassName} />);

HistoryTableHeaderRenderer.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number,
  columnClassName: PropTypes.string
};

HistoryTableHeaderRenderer.defaultProps = {
  headers: undefined,
  width: undefined,
  columnClassName: undefined
};
