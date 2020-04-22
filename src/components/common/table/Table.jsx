import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Rows } from './Rows';
import { Column } from './Column';
import style from './Table.module.scss';

export const Table = ({ headerItems, items, tableClassName, columnClassName, rowRenderer }) => {
  const width = 100 / headerItems?.length;
  const rowItems = rowRenderer(items);

  return (
    <div className={classNames(style.table, tableClassName)}>
      <div className={style.header}>
        {headerItems?.map(title => (
          <Column key={title} value={title} width={width} className={columnClassName} />
        ))}
      </div>
      <div className={style.rows}>
        {rowItems?.map(item => (
          <Rows rows={Object.values(item)} width={width} columnClassName={columnClassName} />
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape()),
  rowRenderer: PropTypes.func.isRequired,
  tableClassName: PropTypes.string,
  rowClassName: PropTypes.string,
  columnClassName: PropTypes.string
};

Table.defaultProps = {
  headerItems: undefined,
  rowItems: undefined,
  tableClassName: undefined,
  rowClassName: undefined,
  columnClassName: undefined
};
