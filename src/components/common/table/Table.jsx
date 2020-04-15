import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './row/Row';
import style from './Table.module.scss';

const Rows = ({ rows, width }) => {
  return (
    <Row>
      {rows.map((text, index) => {
        if (index === 0) {
          return null;
        }

        return (
          <div key={text} style={{ width: `${width}%` }} className={style.column}>
            {text}
          </div>
        );
      })}
    </Row>
  );
};

export const Table = ({ headerItems, rowItems }) => {
  const width = 100 / headerItems?.length;

  return (
    <div className={style.tableWrapper}>
      <div className={style.header}>
        {headerItems?.map(title => {
          return (
            <div key={title} style={{ width: `${width}%` }} className={style.column}>
              {title}
            </div>
          );
        })}
      </div>
      <div className={style.rows}>
        {rowItems?.map(item => {
          return <Rows rows={Object.values(item)} width={width} />;
        })}
      </div>
    </div>
  );
};

Table.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string),
  rowItems: PropTypes.arrayOf(PropTypes.shape())
};
