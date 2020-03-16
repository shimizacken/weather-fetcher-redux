import React from 'react';
import { ButtonTypes } from './buttonTypes';
import styles from './Button.scss';

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  buttonType?: ButtonTypes;
  dataCy?: string
};

export const Button: React.FC<ButtonProps> = React.memo(({ text, disabled, onClick, buttonType, dataCy }) => (
  <button className={styles.searchButton} type={buttonType} disabled={disabled} onClick={onClick} data-cy={dataCy}>
    {text}
  </button>
));
