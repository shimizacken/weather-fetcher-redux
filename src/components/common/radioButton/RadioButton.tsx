import React from 'react';
import classNames from 'classnames';
import styles from './RadioButton.scss';

interface RadioButtonProps {
  text?: string;
  name?: string;
  checked?: boolean;
  className?: string;
  style?: any;
  onChange?: () => void;
  value?: string;
  dataCy?: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({ text, name, checked, className, style, onChange, value, dataCy }) => (
  <label className={classNames(styles.container, className)} style={style}>
    {text}
    <input type="radio" defaultChecked={checked} name={name} onChange={onChange} value={value} data-cy={dataCy} />
    <span className={styles.checkmark}></span>
  </label>
);
