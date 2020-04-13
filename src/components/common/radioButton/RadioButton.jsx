import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RadioButton.scss';

export const RadioButton = ({ text, name, checked, className, style, onChange, value, disabled, dataCy }) => (
  <label className={classNames(styles.container, disabled && styles.disabled, className)} style={style}>
    <span>{text}</span>
    <input
      type="radio"
      defaultChecked={checked}
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      data-cy={dataCy}
    />
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
  value: PropTypes.string,
  dataCy: PropTypes.string
};

RadioButton.defaultProps = {
  text: undefined,
  name: undefined,
  checked: undefined,
  className: undefined,
  style: undefined,
  onChange: undefined,
  value: undefined,
  dataCy: undefined
};
