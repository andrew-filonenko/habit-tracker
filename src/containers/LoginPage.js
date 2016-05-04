import React, { Component, PropTypes } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { login } from '../actions/user-actions';
import { setUsername, setPassword } from '../actions/login-actions';

@connect
export default class LoginPage extends Component {

  render() {
    return (
      <Login onLogin={ login } onUsername={ setUsername } onPassword={ setPassword }/>
    );
  }
}

