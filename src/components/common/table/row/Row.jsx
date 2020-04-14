import React from 'react';
import PropTypes from 'prop-types';
import style from './Row.module.scss';

export const Row = ({ children }) => {
  return <div className={style.rowWrapper}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node
};
