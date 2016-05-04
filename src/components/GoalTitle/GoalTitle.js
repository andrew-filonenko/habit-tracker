import React, { PropTypes } from 'react';
import bem from '../../utils/bem-helper';
import cx from 'classnames';
import Icon from 'react-fa';

function GoalTitle(props) {
  const { negative, title, className: _className } = props;
  const { block, elem, mod } = bem('b', 'goal-title');
  const className = cx(block, _className, { [mod('negative')]: negative });
  return (
    <div className={ className }>
      <div className={ elem('title') }>{ title }</div>
      <Icon className={ elem('type') } name={ negative ? 'frown-o' : 'smile-o' }/>
    </div>
  );
}

GoalTitle.propTypes = {
  title: PropTypes.string,
  negative: PropTypes.bool,
  className: PropTypes.string
};

export default GoalTitle;
