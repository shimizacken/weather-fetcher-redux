import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';
import style from './Table.module.scss';

export const Table = ({
  headers,
  items,
  tableClassName,
  rowClassName,
  columnClassName,
  headerRenderer,
  rowRenderer
}) => {
  const width = 100 / headers?.length;
  const HeaderRenderer = headerRenderer;
  const RowRenderer = rowRenderer;

  return (
    <div className={classNames(style.table, tableClassName)}>
      <div className={style.header}>
        <HeaderRenderer headers={headers} width={width} columnClassName={columnClassName} />
      </div>
      <div className={style.rows}>
        {items?.map(row => (
          <RowRenderer
            key={uuid.v4()}
            row={row}
            width={width}
            rowClassName={rowClassName}
            columnClassName={columnClassName}
          />
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  headerRenderer: PropTypes.elementType.isRequired,
  rowRenderer: PropTypes.elementType.isRequired,
  tableClassName: PropTypes.string,
  rowClassName: PropTypes.string,
  columnClassName: PropTypes.string
};

Table.defaultProps = {
  items: undefined,
  tableClassName: undefined,
  rowClassName: undefined,
  columnClassName: undefined
};
