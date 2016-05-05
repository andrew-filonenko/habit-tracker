import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './app.scss';
import Root from './containers/Root';

render(
  <Provider store={ store }><Root /></Provider>,
  document.getElementById('root')
);
