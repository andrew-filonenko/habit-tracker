import React, { PropTypes } from 'react';
import Day from '../Day';
import bem from '../../../utils/bem-helper';
import { DAYS } from '../../../constants';
import cx from 'classnames';

function Goal(props) {
  const { code, negative, weekView, onCheck, className: _className } = props;
  const handleClick = day => increment => onCheck(code, day, increment);
  const { block, elem, mod } = bem('b', 'goal');
  const className = cx(block, _className, { [mod('negative')]: negative });

  const days = weekView
    .map((amount, i) => {
      return (
        <Day
          onClick={ handleClick(DAYS[i]) }
          className={ elem('day') }
          negative={ negative }
          amount={ amount }
          key={ `day-${i}` }
        />
      );
    });
  return (
    <div className={ className }>
      { days }
    </div>
  );
}

Goal.propTypes = {
  code: PropTypes.string,
  title: PropTypes.string,
  negative: PropTypes.bool,
  weekView: PropTypes.array,
  onCheck: PropTypes.func,
  className: PropTypes.string
};

export default Goal;
