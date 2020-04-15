import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainHeader } from 'app/features/layout';
import { WeatherContainer } from 'app/features/searchWeather';
import { SearchHistoryContainer, SearchHistoryViewContainer } from 'app/features/searchHistory';
import styles from './RootContainer.scss';

export const RootContainer = () => (
  <div className={styles.root}>
    <MainHeader />
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
      <Route path="/history" render={() => <SearchHistoryViewContainer />} exact />
    </Switch>
  </div>
);
