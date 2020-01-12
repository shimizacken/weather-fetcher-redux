import React from 'react';
import { Theme } from 'app/features/theme';
import { Header } from 'app/features/layout';
import { WeatherContainer } from 'app/features/searchWeather';
import { SearchHistoryContainer } from 'app/features/searchHistory';
import styles from './RootContainer.scss';

export const RootContainer = () => (
  <Theme>
    <div className={styles.root}>
      <Header />
      <SearchHistoryContainer />
      <WeatherContainer />
    </div>
  </Theme>
);
