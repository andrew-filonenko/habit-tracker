import React from 'react';
import cx from 'classnames';
import bem from '../../utils/bem-helper';
import Icon from 'react-fa';

export default function Ribbon({ text, className, type }) {
  const { block, elem, mod } = bem('b', 'ribbon');
  const _className = cx(className, block, mod(type));
  const icon = (type === 'error')
    ? <Icon name="warning" className={ elem('icon') } />
    : null;
  const message = <span className={ elem('message') }>{ text }</span>;
  return <div className={ _className }>{ icon }{ message }</div>;
}
