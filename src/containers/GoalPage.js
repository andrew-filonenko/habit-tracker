import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkDay } from '../actions/goals-actions';
import GoalTable from '../components/GoalTable';
import { push } from 'redux-router';

@connect(({ goal, user }) => ({ goal: goal.toJS(), user: user.toJS() }))
export default class GoalPage extends Component {

  static propTypes = {
    goal: PropTypes.array.isRequired,
    dispatch: PropTypes.func,
    onCheck: PropTypes.func
  }

  componentWillMount() { this.unmountIfNotLoggedIn(this.props); }
  componentWillReceiveProps(props) { this.unmountIfNotLoggedIn(props); }

  unmountIfNotLoggedIn = ({ user: { loggedIn } }) => {
    if (!loggedIn) this.props.dispatch(push('/'));
  }

  handleCheck = (code, day, increment) => {
    this.props.dispatch(checkDay({ code, day, increment }));
  };

  render() {
    return (
      <GoalTable
        goals={ this.props.goal }
        onCheck={ this.handleCheck }/>
    );
  }
}
