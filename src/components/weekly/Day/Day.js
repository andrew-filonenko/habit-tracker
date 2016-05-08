import React, { PropTypes } from 'react';
import bem from '../../../utils/bem-helper';
import cx from 'classnames';
import range from 'lodash/range';
import Icon from 'react-fa';

function Day(props) {
  const { negative, amount, onClick, className: _className } = props;
  const { block, elem, mod } = bem('b', 'day');
  const className = cx(block, _className, { [mod('negative')]: negative });

  function handleIncrement() {
    return onClick(negative ? -1 : 1);
  }

  function handleDecrement(evt) {
    evt.stopPropagation();
    return onClick(negative ? 1 : -1);
  }

  const icons = range(amount).map((_, i) => {
    const key = `icon-${i}`;
    return (
      <Icon
        className={ elem('item') }
        key={ key }
        name={ negative ? 'thumbs-o-down' : 'thumbs-o-up' }
        onClick={ handleDecrement }
      />
    );
  });

  return (
    <div className={ className } onClick={ handleIncrement }>
      { icons }
    </div>
  );
}

Day.propTypes = {
  negative: PropTypes.bool,
  amount: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Day;


