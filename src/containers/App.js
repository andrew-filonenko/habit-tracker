import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout, getSession } from '../actions/user-actions';
import Header from '../components/Header';
import Container from '../components/Container';
import { push } from 'redux-router';

@connect(state => ({ routerState: state.router, user: state.user.toJS() }))
export default class App extends Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
    user: PropTypes.object
  };

  componentWillMount() {
    this.props.dispatch(getSession()).then(() => this.leaveIfNotLoggedIn(this.props));
  }
  componentWillReceiveProps(props) { this.leaveIfNotLoggedIn(props); }

  leaveIfNotLoggedIn = ({ user: { loggedIn, sessionChecked } }) => {
    if (!loggedIn && !sessionChecked) this.props.dispatch(push('/login'));
  }

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
