import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Theme } from 'app/features/theme';
import { RootContainer } from './RootContainer';

export const RootRouter = () => (
  <Theme>
    <HashRouter>
      <Switch>
        <Route path="/" component={RootContainer} />
      </Switch>
    </HashRouter>
  </Theme>
);
