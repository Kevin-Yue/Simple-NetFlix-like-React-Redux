import React from 'react';
import ReactTooltip from 'react-tooltip';

//This button can trigger behavior and appearance based on props property isAdded.
export const Addbutton = ({ isAdded, onClick, isOn }) => {
  if (isAdded)
    return (
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onClick}
          data-tip={'REMOVE FROM MY LIST'}
          style={{
            display: isOn ? 'inline-block' : 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Remove
        </button>
        <ReactTooltip
          className={'tooltip'}
          place="bottom"
          type="light"
          effect="solid"
        />
      </div>
    );

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={onClick}
        data-tip={'ADD TO MY LIST'}
        style={{
          display: isOn ? 'inline-block' : 'none',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Add
      </button>
      <ReactTooltip
        className={'tooltip'}
        place="bottom"
        type="light"
        effect="solid"
      />
    </div>
  );
};
