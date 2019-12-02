import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.scss';

export const RadioButton = ({ text, name, checked, className, style, onChange, value }) => (
  <label className={classNames(styles.container, className)} style={style}>
    {text}
    <input type="radio" defaultChecked={checked} name={name} onChange={onChange} value={value} />
    <span className={styles.checkmark}></span>
  </label>
);

RadioButton.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string
};

RadioButton.defaultProps = {
  text: undefined,
  name: undefined,
  checked: undefined,
  className: undefined,
  style: undefined,
  onChange: undefined,
  value: undefined
};
