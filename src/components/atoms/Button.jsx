import React from 'react';
import classNames from 'classnames';

const Button = ({
  text = 'Submit',
  disabled = false,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={classNames('btn', className, {
        'btn--disabled': disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
