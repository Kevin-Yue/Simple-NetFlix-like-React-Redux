import React from 'react';
import { Item } from './Item';

export const List = ({
  items,
  onButtonClick,
  isAdded,
  onMouseOver,
  onMouseLeave
}) => (
  <ul
    style={{
      listStyleType: 'none',
      display: 'flex',
      height: '270px'
    }}
  >
    {items.map(item => (
      <Item
        key={item.id}
        {...item}
        isAdded = {isAdded}
        onClick={() => onButtonClick(item)}
        onMouseOver={() => onMouseOver(item.id)}
        onMouseLeave={() => onMouseLeave(item.id)}
      />
    ))}
  </ul>
);
