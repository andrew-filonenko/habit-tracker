import React from 'react';
import bem from '../../../utils/bem-helper';
import cx from 'classnames';

export default function TextInput({ type, className, label, ...rest }) {
  const { block, elem } = bem('b', 'text-input');
  const _className = cx(className, block);
  return (
    <div className={ _className }>
      <label className={ elem('label') }>{ label }</label>
      <input className={ elem('input') } type={ type || block } { ...rest } />
    </div>
  );
}
