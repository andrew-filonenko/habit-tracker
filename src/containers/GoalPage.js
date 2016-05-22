import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkDay, getGoals, getReports, update } from '../actions/goals-actions';
import { set, submit } from '../actions/new-goal-actions';
import { add as addGoal, added as addedGoal } from '../actions/application-actions';
import {
  change as changeGoal,
  cancel as draftGoalCancel,
  del as draftGoalDelete
} from '../actions/draft-goal-actions';
import { toggleEdit } from '../actions/goal-page-actions';
import GoalTable from '../components/weekly/GoalTable';
import Loader from '../components/Loader';

@connect(({ goal, user, application, newGoal, goalPage, draftGoal }) => ({
  goal: goal.toJS(),
  user: user.toJS(),
  application: application.toJS(),
  newGoal: newGoal.toJS(),
  draftGoal: draftGoal.toJS(),
  goalPage: goalPage.toJS()
}))
export default class GoalPage extends Component {
  static propTypes = {
    goal: PropTypes.object.isRequired,
    newGoal: PropTypes.object,
    draftGoal: PropTypes.object,
    goalPage: PropTypes.object,
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

  handleEdit = () => {
    this.props.dispatch(toggleEdit());
  }

  handleGoalChange = payload => {
    this.props.dispatch(changeGoal(payload));
  }

  handleGoalEdited = () => {
    const { dispatch, draftGoal } = this.props;
    dispatch(update(draftGoal));
  };

  handleCancel = () => this.props.dispatch(draftGoalCancel());

  handleDelete = code => this.props.dispatch(draftGoalDelete(code));

  renderGoalTable() {
    const {
      handleSet,
      handleSubmit,
      handleGoalChange,
      handleCheck,
      handleEdit,
      handleCancel,
      handleDelete,
      handleGoalEdited,
      onAdd,
      onAdded,
      props: { newGoal, goal, draftGoal, application: { goalAdding }, goalPage: { goalEditing } } } = this;

    return (
      <GoalTable
        onAdd={ onAdd }
        draftGoal={ draftGoal }
        onAdded={ onAdded }
        goalAdding={ goalAdding }
        newGoal={ newGoal }
        goalEditing={ goalEditing }
        goals={ goal }
        onSet={ handleSet }
        onSubmit={ handleSubmit }
        onChange={ handleGoalChange }
        onEdit={ handleEdit }
        onEdited={ handleGoalEdited }
        onDelete={ handleDelete }
        onCancel={ handleCancel }
        onCheck={ handleCheck }
      />
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
