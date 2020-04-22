import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Row.module.scss';

export const Row = ({ children, className }) => {
  return <div className={classNames(style.row, className)}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node
};
