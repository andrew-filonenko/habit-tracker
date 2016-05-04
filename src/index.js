import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import Header from './containers/Header';
import Container from './components/Container';
import './app.scss';

render(
  <Provider store={store}>
    <div className="b-app">
      <Header />
      <Container>
        <App/>
      </Container>
    </div>
  </Provider>,
  document.getElementById('root')
);
