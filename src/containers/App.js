import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkDay } from '../actions/goals-actions';
import GoalTable from '../components/GoalTable';

@connect(({ goal }) => ({ goal: goal.toJS() }))
export default class App extends Component {

  static propTypes = {
    goal: PropTypes.array.isRequired,
    dispatch: PropTypes.func,
    onCheck: PropTypes.func
  }

  handleCheck = (code, day, increment) => {
    this.props.dispatch(checkDay({ code, day, increment }));
  };

  render() {
    return (
      <GoalTable goals={ this.props.goal } onCheck={ this.handleCheck }/>
    );
  }
}
