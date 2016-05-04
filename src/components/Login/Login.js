import React from 'react';
import bem from '../../utils/bem-helper';
import TextInput from '../inputs/TextInput';
import Button from '../inputs/Button';
import Ribbon from '../Ribbon';

export default function Login({ errorMessage, onLogin, onUsername, onPassword }) {
  const { block, elem } = bem('b', 'login');
  const notification = errorMessage
    ? (
      <Ribbon text={ errorMessage } type="error" />
    )
    : null;

  function handleUsername({ target: { value } }) {
    onUsername(value);
  }

  function handlePassword({ target: { value } }) {
    onPassword(value);
  }

  return (
    <div className={ block }>
      <div className={ elem('inner') }>
        <TextInput className={ elem('username') } onChange={ handleUsername } label="Username"/>
        <TextInput className={ elem('password') } onChange={ handlePassword } type="password" label="Password" />
        <Button className={ elem('button') } text="Log In" onClick={ onLogin }/>
        { notification }
      </div>
    </div>
  );
}
