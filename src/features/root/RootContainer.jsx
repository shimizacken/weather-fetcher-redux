import React from 'react';
import { Theme } from '../theme';
import { Header } from '../portal';
import { WeatherContainer } from '../../components/weather';
import { SearchHistoryContainer } from '../../components/weather/searchHistory';
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
