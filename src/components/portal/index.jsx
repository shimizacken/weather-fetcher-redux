import React from 'react';
import classNames from 'classnames';
import { Theme } from './theme';
import { Header } from './header';
import WeatherContainer from '../weather';
import SearchHistoryContainer from '../weather/searchHistory';
import styles from './styles.scss';

export const MainPortalContainer = () => (
  <Theme>
    <div className={classNames(styles.root)}>
      <Header />
      {/* <SearchHistoryContainer />
      <WeatherContainer /> */}
    </div>
  </Theme>
);
