import React from 'react';
import PropTypes from 'prop-types';
import { Rows } from './Rows';
import { Column } from './Column';
import style from './Table.module.scss';

export const Table = ({ headerItems, rowItems, columnClassName }) => {
  const width = 100 / headerItems?.length;

  return (
    <div className={style.tableWrapper}>
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
  rowItems: PropTypes.arrayOf(PropTypes.shape()),
  columnClassName: PropTypes.string
};

Table.defaultProps = {
  headerItems: undefined,
  rowItems: undefined,
  columnClassName: undefined
};
