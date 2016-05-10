import React from 'react';
import bem from '../../../utils/bem-helper';
import cx from 'classnames';
import TextInput from '../../inputs/TextInput';
import Button from '../../inputs/Button';

export default function GoalForm({ onSubmit, onSet, goal, className: _className, onAdded }) {
  const { block } = bem('b', 'goal-form');
  const className = cx(_className, block);

  function handleSubmit(e) {
    e.preventDefault();
    return false;
  }

  function add(goalType) {
    return () => {
      const negative = goalType === 'addiction';
      if (goal.title) {
        onSet('negative', negative);
        onSubmit({ ...goal, negative });
      }
    };
  }


  function handleChange(name) {
    return e => {
      onSet(name, e.target.value);
    };
  }

  return (
    <form className={ className } onSubmit={ handleSubmit }>
      <TextInput placeholder="Name" maxLength={ 20 } required="true"
        value={ goal.title }
        onChange={ handleChange('title') }
      />
      <Button onClick={ add('habit') }
        text="Add Habit" type="submit" value="habit"
      />
      <Button onClick={ add('addiction') }
        text="Add Addiction" type="submit" value="addiction"
      />
      <Button onClick={ onAdded } text="Cancel" type="button"/>
    </form>
  );
}
