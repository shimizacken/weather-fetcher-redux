import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.scss';

export const ErrorMessage = React.memo(({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return <span className={styles.errorMessage}>{errorMessage}</span>;
});

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
};

ErrorMessage.defaultProps = {
  errorMessage: undefined
};
