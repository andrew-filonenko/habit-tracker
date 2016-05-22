import React, { PropTypes } from 'react';
import bem from '../../../utils/bem-helper';
import cx from 'classnames';
import Icon from 'react-fa';
import TextInput from '../../inputs/TextInput';

function GoalTitle(props) {
  const {
    negative,
    title,
    className: _className,
    goalEditing,
    draftGoal,
    onChange,
    onDelete,
    code
  } = props;
  const { block, elem, mod } = bem('b', 'goal-title');
  const className = cx(block, _className, { [mod('negative')]: negative });
  const currentTitle = code in draftGoal ? (draftGoal[code] || {}).title : title;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { target: { value } } = e;
    onChange({ code, title: value });
  }

  function handleDelete(e) {
    e.preventDefault();
    onDelete(code);
  }

  const editIcons = [
    <Icon className={ elem('delete') }
      onClick={ handleDelete }
      name="trash-o"
      key="delete"
    />,
  ];

  const titleRO = (
    <div className={ elem('title') }>{ title }</div>
  );

  const titleEdit = (
    <form onSubmit={ handleSubmit } className={ elem('title-edit') }>
      <TextInput placeholder="Goal Title" type="text" value={ currentTitle }
        onChange={ handleChange }
      />
    </form>
  );

  const goalTypeIcon = (
    <Icon className={ elem('type') } name={ negative ? 'frown-o' : 'smile-o' }/>
  );

  return (
    <div className={ className }>
      { goalEditing || goalTypeIcon }
      { goalEditing ? titleEdit : titleRO }
      { !goalEditing || editIcons }
    </div>
  );
}

GoalTitle.propTypes = {
  title: PropTypes.string,
  negative: PropTypes.bool,
  className: PropTypes.string,
  goalEditing: PropTypes.bool,
  onDelete: PropTypes.func,
  draftGoal: PropTypes.object,
  onChange: PropTypes.func,
  code: PropTypes.string
};

export default GoalTitle;
