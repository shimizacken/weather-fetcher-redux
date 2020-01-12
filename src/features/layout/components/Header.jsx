import React from 'react';
import sun from 'app/assets/png/sun';
import { ToggleTheme } from 'app/features/theme';
import styles from './Header.scss';

export const Header = () => (
  <header>
    <h1 className={styles.mainHeader}>
      <img src={sun} /> weather fetcher
    </h1>
    <ToggleTheme />
  </header>
);
