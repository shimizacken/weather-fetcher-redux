import React from 'react';
import sun from 'app/assets/png/sun.png';
import { ToggleTheme } from 'app/features/theme';
import styles from './Header.scss';

export const Header = React.memo(() => (
  <header>
    <h1 className={styles.mainHeader}>
      <img src={sun} /> weather fetcher
    </h1>
    <ToggleTheme />
  </header>
));
