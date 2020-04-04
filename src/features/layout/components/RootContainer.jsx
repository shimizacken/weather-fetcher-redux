import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'app/features/layout';
import { WeatherContainer } from 'app/features/searchWeather';
import { SearchHistoryContainer } from 'app/features/searchHistory';
import styles from './RootContainer.scss';

export const RootContainer = () => (
  <div className={styles.root}>
    <Header />
    <Switch>
      <Route
        path="/"
        render={() => (
          <>
            <SearchHistoryContainer />
            <WeatherContainer />
          </>
        )}
        exact
      />
      <Route path="/history" render={() => <SearchHistoryContainer />} exact />
    </Switch>
  </div>
);
