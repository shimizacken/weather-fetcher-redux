import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.scss';

export const TextInput = ({ value, onChange, disabled, dataCy }) => {
  return (
    <input
      className={styles.textInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type city name and hit the enter..."
      disabled={disabled}
      data-cy={dataCy}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  displayLoader: PropTypes.bool.isRequired,
  dataCy: PropTypes.string
};

TextInput.defaultProps = {
  dataCy: undefined
};
