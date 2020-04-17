import React from 'react';
import PropTypes from 'prop-types';
import { Rows } from './Rows';
import style from './Table.module.scss';
import { Column } from './Column';

export const Table = ({ headerItems, rowItems }) => {
  const width = 100 / headerItems?.length;

  return (
    <div className={style.tableWrapper}>
      <div className={style.header}>
        {headerItems?.map(title => (
          <Column key={title} text={title} width={width} className={style.column} />
        ))}
      </div>
      <div className={style.rows}>
        {rowItems?.map(item => (
          <Rows rows={Object.values(item)} width={width} />
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string),
  rowItems: PropTypes.arrayOf(PropTypes.shape())
};
