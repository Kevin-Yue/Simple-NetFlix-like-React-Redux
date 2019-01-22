import React from 'react';

export const Row = ({ rowName, children }) => (
  <div>
    <h2 style = {{fontSize: '1.1em'}}>{rowName}</h2>
    <div>{children}</div>
  </div>
);
