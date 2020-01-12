import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTypes } from './buttonTypes';
import styles from './Button.scss';

export const Button = React.memo(({ text, disabled, onClick, buttonType }) => (
  <button className={styles.searchButton} type={buttonType} disabled={disabled} onClick={onClick}>
    {text}
  </button>
));

Button.protoTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes))
};

Button.defaultProps = {
  text: undefined,
  disabled: false,
  onClick: undefined,
  buttonType: ButtonTypes.BUTTON
};
