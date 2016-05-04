import React from 'react';
import bem from '../../utils/bem-helper';
import Logo from '../Logo';

export default function Header() {
  const { block, elem } = bem('b', 'header');
  return (
    <div className={ block }>
      <Logo className={ elem('logo') }/>
      <div className={ elem('user-actions') }>
        <a href="#">Log out</a>
      </div>
    </div>
  );
}
