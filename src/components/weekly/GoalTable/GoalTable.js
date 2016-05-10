import React from 'react';
import zip from 'lodash/zip';
import sum from 'lodash/sum';
import Goal from '../Goal';
import GoalTitle from '../GoalTitle';
import GoalForm from '../GoalForm';
import GoalActions from '../GoalActions';
import bem from '../../../utils/bem-helper';
import { DAYS } from '../../../constants';

function weeklyTotal(weeklyProgress) {
  return zip(...weeklyProgress.map(p => p.weekView)).map(sum);
}

export default function GoalTable({
  goals,
  onCheck,
  onSet,
  onAdd,
  onAdded,
  newGoal,
  onSubmit,
  goalAdding
}) {
  const { block, elem } = bem('b', 'goal-table');

  const progress = goals.map((goalReport, i) => {
    const key = `goal-${i}`;
    return (
      <div className={ elem('goal-row') } key={ key }>
        <GoalTitle className={ elem('goal-title') } { ...goalReport } />
        <Goal
          className={ elem('goal-view') } { ...goalReport }
          onCheck ={ onCheck }
        />
      </div>
    );
  });

  const total = weeklyTotal(goals).map((total, i) => {
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
          <GoalActions className={ elem('goal-actions') } onAdd={ onAdd }/>
          <div className={ elem('day-titles') }>
            { days }
          </div>
        </div>
        { goalForm }
        <div className={ elem('data') }>
          { progress }
        </div>
        <div className={ elem('total') }>
          <div className={ elem('per-day') } >
            { total }
          </div>
        </div>
      </div>
    </div>
  );
}
