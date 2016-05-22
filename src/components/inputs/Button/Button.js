import React from 'react';
import cx from 'classnames';

export default function Button({ text, className, children, ...rest }) {
  const _className = cx(className, 'b-button');
  return <button className={ _className } { ...rest }>{ children || text }</button>;
}
