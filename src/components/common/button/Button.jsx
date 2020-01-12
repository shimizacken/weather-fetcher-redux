import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

export const Button = React.memo(({ text, disabled }) => (
  <button className={styles.searchButton} type="submit" disabled={disabled}>
    {text}
  </button>
));

Button.protoTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  text: undefined,
  disabled: false
};
