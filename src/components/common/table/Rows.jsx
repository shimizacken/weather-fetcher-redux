import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './Row';
import { Column } from './Column';

export const Rows = ({ rows, width, columnClassName }) => {
  return (
    <Row>
      {rows.map((text, index) => {
        if (index === 0) {
          return null;
        }

        return <Column key={index} width={width} value={text} className={columnClassName} />;
      })}
    </Row>
  );
};

Rows.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number,
  columnClassName: PropTypes.string
};

Rows.defaultProps = {
  headerItems: undefined,
  width: undefined,
  columnClassName: undefined
};
