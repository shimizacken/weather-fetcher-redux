import React from 'react';
import { Theme } from 'app/features/theme';
import { Header } from 'app/features/portal';
import { WeatherContainer } from 'app/features/searchWeather';
import { SearchHistoryContainer } from 'app/features/searchHistory';
import styles from './styles.scss';

export const RootContainer = () => (
  <Theme>
    <div className={styles.root}>
      <Header />
      <SearchHistoryContainer />
      <WeatherContainer />
    </div>
  </Theme>
);
