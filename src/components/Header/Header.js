import React from 'react';
import bem from '../../utils/bem-helper';
import Logo from '../Logo';

function handleLogout(cb) {
  return evt => {
    evt.preventDefault();
    cb();
  };
}

export default function Header({ loggedIn, onLogout }) {
  const { block, elem } = bem('b', 'header');
  const logoutAction = loggedIn
    ? <a onClick={ handleLogout(onLogout) } href>Log out</a>
    : null;
  return (
    <div className={ block }>
      <Logo className={ elem('logo') }/>
      <div className={ elem('user-actions') }>
        { logoutAction }
      </div>
    </div>
  );
}
