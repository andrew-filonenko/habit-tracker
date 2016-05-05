import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/user-actions';
import Header from '../components/Header';
import Container from '../components/Container';

@connect(state => ({ routerState: state.router, user: state.user.toJS() }))
export default class App extends Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
    user: PropTypes.object
  };

  handleLogout = () => this.props.dispatch(logout());

  render() {
    const { user: { loggedIn } } = this.props;
    return (
      <div className="b-app">
        <Header onLogout={ this.handleLogout } loggedIn={ loggedIn }/>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
