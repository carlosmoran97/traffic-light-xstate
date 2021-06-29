import React from 'react';

export const Light = ({ color, state }) => {
  return (
    <div style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: color,
      opacity: state === 'on' ? '100%' : '20%',
      margin: '0 auto'
    }} />
  );
};
