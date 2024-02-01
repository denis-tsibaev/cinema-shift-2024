import React from 'react';

export const Button = ({
    type = 'button',
    style,
    className = 'afisha-button',
    children,
    onClick,
}) => {
    return (
        <button
            type={type}
            style={style}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
