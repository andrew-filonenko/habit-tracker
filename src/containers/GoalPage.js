import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkDay, getReports } from '../actions/goals-actions';
import GoalTable from '../components/weekly/GoalTable';
import Loader from '../components/Loader';

@connect(({ goal, user, application }) => ({
  goal: goal.toJS(),
  user: user.toJS(),
  application: application.toJS()
}))
export default class GoalPage extends Component {
  static propTypes = {
    goal: PropTypes.array.isRequired,
    application: PropTypes.object,
    dispatch: PropTypes.func,
    onCheck: PropTypes.func
  }

  componentWillMount() {
    this.props.dispatch(getReports(new Date()));
  }

  handleCheck = (code, day, increment) => {
    this.props.dispatch(checkDay({ code, day, increment }));
  };

  renderGoalTable() {
    return (
      <GoalTable
        goals={ this.props.goal }
        onCheck={ this.handleCheck }/>
    );
  }

  renderLoader() {
    return <Loader/>;
  }

  render() {
    return this.props.application.reportsLoaded
      ? this.renderGoalTable()
      : this.renderLoader();
  }
}
