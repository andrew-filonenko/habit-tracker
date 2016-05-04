import React from 'react';
import cx from 'classnames';

export default function Button(props) {
  const { text, className } = props;
  const _className = cx(className, 'b-button');
  return <button className={ _className }>{ text }</button>;
}
