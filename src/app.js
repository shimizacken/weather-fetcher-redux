import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './state';
import { Provider } from 'react-redux';
import { RootContainer } from './features/root';

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
);
