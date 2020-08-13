import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './BackButton.module.scss';

export const BackButton: React.FC<React.ComponentProps<'a'> & {
  text?: string;
  disabled?: boolean;
  to?: string;
  dataCy?: string;
}> = React.memo(({ text, disabled = false, to, className, dataCy }) => (
  <Link className={classNames(styles.backButton, className)} disabled={disabled} to={to || '/'} data-cy={dataCy}>
    {text || '<'}
  </Link>
));
