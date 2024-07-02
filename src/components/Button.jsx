import React from 'react';

export const Button = ({
  type = 'button',
  style,
  className = 'afisha-button',
  children,
  onClick,
  disabled,
}) => (
  <button
    type={type}
    style={style}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
