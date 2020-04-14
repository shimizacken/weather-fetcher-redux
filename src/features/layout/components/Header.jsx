import React from 'react';
import sun from 'app/assets/png/wf-logo.png';
import { ToggleTheme } from 'app/features/theme';
import styles from './Header.scss';

export const Header = React.memo(() => (
  <header>
    <h1 className={styles.mainHeader}>
      <img src={sun} />
    </h1>
    <ToggleTheme />
  </header>
));
