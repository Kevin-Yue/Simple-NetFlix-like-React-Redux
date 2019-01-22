import React from 'react';

export const Footer = ({ mylist }) => (
  <ul style={{margin: '0 15px'}}>
    {mylist.map(item => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
);
