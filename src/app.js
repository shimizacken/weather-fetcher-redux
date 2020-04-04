import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './state';
import { Provider } from 'react-redux';
import { RootRouter } from './features/layout';
import 'app/styles/base.scss';

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
);
