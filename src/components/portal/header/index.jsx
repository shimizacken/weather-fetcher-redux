import React from 'react';
import { ToggleTheme } from '../theme/toggleTheme';
import sun from '../../../assets/png/sun';
import styles from './styles.scss';

export const Header = () => (
  <header>
    <h1 className={styles.mainHeader}>
      <img src={sun} /> weather fetcher
    </h1>
    <ToggleTheme />
  </header>
);
