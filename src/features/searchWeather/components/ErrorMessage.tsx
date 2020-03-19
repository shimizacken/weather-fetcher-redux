import React from 'react';
import styles from './ErrorMessage.scss';

interface ErrorMessageProps {
  errorMessage?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return <span className={styles.errorMessage}>{errorMessage}</span>;
};
