import React, { Component } from 'react';
import { ReduxRouter } from 'redux-router';
import App from '../containers/App';
import LoginPage from '../containers/LoginPage';
import GoalPage from '../containers/GoalPage';
import { Route, IndexRedirect } from 'react-router';

export default class Root extends Component {

  render() {
    return (
      <ReduxRouter>
        <Route component={ App } path="/">
          <IndexRedirect to="goals"/>
          <Route path="login" component={ LoginPage }/>
          <Route
            path="goals"
            component={ GoalPage }
          />
        </Route>
      </ReduxRouter>
    );
  }
}

