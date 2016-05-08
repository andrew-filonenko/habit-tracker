import React from 'react';
import bem from '../../utils/bem-helper';
import Icon from 'react-fa';
import cx from 'classnames';

export default function({ className: _className }) {
  const { block, elem } = bem('b', 'loader');
  const className = cx(block, _className);
  return (
    <div className={ className }>
      <Icon className={ elem('icon') } spin size="5x" name="spinner" />
    </div>
  );
}
