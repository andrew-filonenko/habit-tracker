import React, { Component, PropTypes } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { login } from '../actions/user-actions';
import { setUsername, setPassword } from '../actions/login-actions';

@connect(state => ({ login: state.login.toJS() }))
export default class LoginPage extends Component {

  setUsername = username => this.props.dispatch(setUsername(username));
  setPassword = password => this.props.dispatch(setPassword(password));

  render() {
    return (
      <Login onLogin={ login } onUsername={ this.setUsername } onPassword={ this.setPassword }/>
    );
  }
}

