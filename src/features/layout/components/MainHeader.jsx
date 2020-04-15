import React from 'react';
import { ToggleTheme } from 'app/features/theme';
import { LogoContainer } from './LogoContainer';
import styles from './MainHeader.module.scss';

export const MainHeader = React.memo(() => (
  <header className={styles.mainHeader}>
    <LogoContainer />
    <ToggleTheme />
  </header>
));
