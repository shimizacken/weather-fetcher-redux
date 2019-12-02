import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './state';
import { Provider } from 'react-redux';
import { MainPortalContainer } from './components/portal';

ReactDOM.render(
  <Provider store={store}>
    <MainPortalContainer />
  </Provider>,
  document.getElementById('root')
);
