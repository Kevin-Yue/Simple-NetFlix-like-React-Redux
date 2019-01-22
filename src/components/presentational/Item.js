import React from 'react';
import { Addbutton } from './AddButton';

export const Item = ({
  title,
  img,
  isAdded,
  isOn,
  onClick,
  onMouseOver,
  onMouseLeave
}) => (
  <li onMouseLeave={onMouseLeave}>
    <img src={img} alt={title} onMouseOver={onMouseOver} />
    <div style={{ textAlign: 'center' }}>{title}</div>
    <Addbutton onClick={onClick} isAdded={isAdded} isOn={isOn} />
  </li>
);
