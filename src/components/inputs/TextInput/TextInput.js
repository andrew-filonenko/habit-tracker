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
  const labelElem = (
    <label htmlFor={ name } className={ elem('label') }>{ label }</label>
  );
  return (
    <div className={ _className }>
      { label ? labelElem : null }
      <input
        name={ name }
        className={ elem('input') }
        placeholder={ placeholder }
        type={ type || 'text' } { ...rest } />
    </div>
  );
}

