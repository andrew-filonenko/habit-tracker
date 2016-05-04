import React from 'react';
import Icon from 'react-fa';
import bem from '../../utils/bem-helper';

export default function() {
  const { block, elem } = bem('b', 'logo');
  return (
    <a href="#" className={ block }>
      <Icon className={ elem('logo') } name="bullseye" />
    </a>
  );
}
