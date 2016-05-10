import React from 'react';
import bem from '../../../utils/bem-helper';
import cx from 'classnames';

export default function TextInput({
  type,
  className,
  name: _name,
  placeholder,
  label, ...rest
}) {
  const { block, elem } = bem('b', 'text-input');
  const _className = cx(className, block);
  const name = _name || (label || placeholder).split().join('').toLowerCase();
  return (
    <div className={ _className }>
      <label htmlFor={ name } className={ elem('label') }>{ label }</label>
      <input name={ name } className={ elem('input') } type={ type || 'text' } { ...rest } />
    </div>
  );
}

