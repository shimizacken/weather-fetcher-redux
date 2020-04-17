import React from 'react';
import PropTypes from 'prop-types';
import { Row } from './Row';
import { Column } from './Column';

export const Rows = ({ rows, width }) => {
  return (
    <Row>
      {rows.map((text, index) => {
        if (index === 0) {
          return null;
        }

        return <Column key={index} width={width} value={text} />;
      })}
    </Row>
  );
};

Rows.propTypes = {
  headerItems: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.number
};
