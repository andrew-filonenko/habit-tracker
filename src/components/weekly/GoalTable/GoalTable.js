import React from 'react';
import zip from 'lodash/zip';
import sum from 'lodash/sum';
import map from 'lodash/map';
import filter from 'lodash/filter';
import Goal from '../Goal';
import GoalTitle from '../GoalTitle';
import GoalForm from '../GoalForm';
import GoalActions from '../GoalActions';
import bem from '../../../utils/bem-helper';
import { DAYS } from '../../../constants';

function weeklyTotal(reports, goals) {
  const filteredReports  = filter(reports, (v, k) => goals.hasOwnProperty(k));
  return zip(...filteredReports).map(sum);
}

export default function GoalTable({
  goals: { goals, reports },
  onCheck,
  onSet,
  onAdd,
  onChange,
  onAdded,
  newGoal,
  draftGoal,
  onSubmit,
  onCancel,
  onEdit,
  onEdited,
  goalAdding,
  onDelete,
  goalEditing
}) {
  const { block, elem } = bem('b', 'goal-table');

  const progress = map(goals, (goal, id) => {
    if ((draftGoal[id] || {})._deleted || goal._deleted) return false;
    const key = `goal-${id}`;
    const weekView = reports[id];
    return (
      <div className={ elem('goal-row') } key={ key }>
        <GoalTitle
          className={ elem('goal-title') }
          goalEditing={ goalEditing } { ...goal }
          code={ id }
          draftGoal={ draftGoal }
          onChange={ onChange }
          onDelete={ onDelete }
        />
        <Goal
          weekView={ weekView }
          code={ id }
          className={ elem('goal-view') } { ...goal }
          onCheck={ onCheck }
        />
      </div>
    );
  }).filter(x => x);

  const total = weeklyTotal(reports, goals).map((total, i) => {
    return <div key={ `total-${i}` } className={ elem('total-item') } >{ total }</div>;
  });

  const days = DAYS.map((month, i) => {
    const key = `month-${i}`;
    return <div className={ elem('day-title') } key={ key }>{ month }</div>;
  });

  const goalForm = goalAdding ? (
    <GoalForm
      className={ elem('form') }
      goal={ newGoal }
      onSubmit={ onSubmit }
      onSet={ onSet }
      onAdded={ onAdded }
    />
    ) : null;
  return (
    <div className={ block }>
      <div className={ elem('inner') }>
        <div className={ elem('head') }>
          <GoalActions
            className={ elem('goal-actions') }
            onAdd={ onAdd }
            goalEditing={ goalEditing }
            onEdit={ onEdit }
            onEdited={ onEdited }
            onCancel={ onCancel }
          />
          <div className={ elem('day-titles') }>
            { days }
          </div>
        </div>
        { goalForm }
        <div className={ elem('data') }>
          { progress }
        </div>
        <div className={ elem('total') }>
          <div className={ elem('goals-footer') }/>
          <div className={ elem('per-day') } >
            { total }
          </div>
        </div>
      </div>
    </div>
  );
}
