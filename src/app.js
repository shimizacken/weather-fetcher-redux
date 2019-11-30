import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { MainPortalContainer } from './components/portal';

ReactDOM.render(
  <Provider store={store}>
    <MainPortalContainer />
  </Provider>,
  document.getElementById('root')
);
