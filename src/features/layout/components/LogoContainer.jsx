import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'app/components/common';
import styles from './LogoContainer.module.scss';

export const LogoContainer = React.memo(() => (
  <Link to="/">
    <Logo className={styles.mainHeader} />
  </Link>
));
