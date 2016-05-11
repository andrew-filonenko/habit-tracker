import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkDay, getGoals, getReports } from '../actions/goals-actions';
import { set, submit } from '../actions/new-goal-actions';
import { add as addGoal, added as addedGoal } from '../actions/application-actions';
import GoalTable from '../components/weekly/GoalTable';
import Loader from '../components/Loader';

@connect(({ goal, user, application, newGoal }) => ({
  goal: goal.toJS(),
  user: user.toJS(),
  application: application.toJS(),
  newGoal: newGoal.toJS()
}))
export default class GoalPage extends Component {
  static propTypes = {
    goal: PropTypes.object.isRequired,
    newGoal: PropTypes.object,
    application: PropTypes.object,
    dispatch: PropTypes.func,
    onCheck: PropTypes.func
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getGoals()).then(dispatch(getReports(new Date())));
  }

  onAdd = () => {
    this.props.dispatch(addGoal());
  };

  onAdded = () => {
    this.props.dispatch(addedGoal());
  };
  handleSet = (name, value) => {
    this.props.dispatch(set({ name, value }));
  }

  handleCheck = (code, day, increment) => {
    this.props.dispatch(checkDay({ code, day, increment }));
  };

  handleSubmit = goal => {
    this.props.dispatch(submit(goal));
  }

  renderGoalTable() {
    const {
      handleSet,
      handleSubmit,
      handleCheck,
      onAdd,
      onAdded,
      props: { newGoal, goal, application: { goalAdding } } } = this;

    return (
      <GoalTable
        onAdd={ onAdd }
        onAdded={ onAdded }
        goalAdding={ goalAdding }
        newGoal={ newGoal }
        goals={ goal }
        onSet={ handleSet }
        onSubmit={ handleSubmit }
        onCheck={ handleCheck }/>
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
