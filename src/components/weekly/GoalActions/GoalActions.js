import React from 'react';
import bem from '../../../utils/bem-helper';
import Icon from 'react-fa';
import cx from 'classnames';

export default function GoalActions({
  onAdd,
  onEdit,
  onEdited,
  onCancel,
  goalEditing,
  className: _className
}) {
  const { block, elem } = bem('b', 'goal-actions');
  const className = cx(_className, block);

  function handleEdit(e) {
    e.preventDefault();
    onEdit();
  }

  function handleAdd(e) {
    e.preventDefault();
    onAdd();
  }

  function handleDone(e) {
    e.preventDefault();
    onEdited();
  }

  function handleCancel(e) {
    e.preventDefault();
    onCancel();
  }

  const editAction = (
    <a className={ elem('action') } href="#" onClick={ handleEdit }>
      Edit
    </a>
  );

  const doneAction = (
    <a className={ elem('action') } href="#" onClick={ handleDone }>
      Done
    </a>
  );

  const cancelAction = (
    <a className={ elem('action') } href="#" onClick={ handleCancel }>
      <Icon name="undo" />
    </a>
  );

  const addAction = (
    <a className={ elem('action') } onClick={ handleAdd } href="#">
      <Icon name="plus"/>
    </a>
  );

  const doneOrEdit = goalEditing ? doneAction : editAction;
  const addOrCancel = goalEditing ? cancelAction : addAction;

  return (
    <div className={ className }>
      { addOrCancel }
      <div>
        Goals
      </div>
      { doneOrEdit }
    </div>
  );
}
