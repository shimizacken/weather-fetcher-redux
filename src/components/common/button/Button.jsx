import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonTypes } from './buttonTypes';
import styles from './Button.scss';

export const Button = React.memo(({ text, disabled, onClick, buttonType, className, dataCy }) => (
  <button
    className={classNames(styles.searchButton, className)}
    type={buttonType}
    disabled={disabled}
    onClick={onClick}
    data-cy={dataCy}
  >
    {text}
  </button>
));

Button.protoTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
  className: PropTypes.string,
  dataCy: PropTypes.string
};

Button.defaultProps = {
  text: undefined,
  disabled: false,
  onClick: undefined,
  buttonType: ButtonTypes.BUTTON,
  className: undefined,
  dataCy: undefined
};
