import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Column.module.scss';

export const Column = ({ value, width, className }) => (
  <div style={{ width: `${width}%` }} className={classNames(style.column, className)}>
    {value}
  </div>
);

Column.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.number
};

Column.defaultProps = {
  value: undefined,
  className: undefined,
  width: undefined
};
