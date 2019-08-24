import React from 'react';
import classNames from 'classnames';

const Input = ({
  name,
  value,
  onChange,
  type,
  required,
  labelName,
  className,
}) => {
  return (
    <div className={classNames('input', className)}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        className="input__element"
      />
      <span className="input__highlight" />
      <span className="input__bar" />
      <label className="input__label">{labelName}</label>
    </div>
  );
};

export default Input;
