import React from 'react';
import bem from '../../../utils/bem-helper';
import Icon from 'react-fa';
import cx from 'classnames';

export default function GoalActions({ onAdd, className: _className }) {
  const { block, elem } = bem('b', 'goal-actions');
  const className = cx(_className, block);
  return (
    <div onClick={ onAdd } className={ className }>
      <Icon className={ elem('action') } name="plus"/>
      <div className={ elem('label') }>Add Goal</div>
    </div>
  );
}
