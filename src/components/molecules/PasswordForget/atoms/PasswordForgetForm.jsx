import React from 'react';
import Input from '../../../atoms/Input';

const PasswordForgetForm = ({
  onSubmit,
  onChange,
  isInvalid,
  error,
  email,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        value={email}
        onChange={onChange}
        labelName="Email Address"
        type="text"
        required
      />

      <button disabled={isInvalid} type="submit" className="btn">
        <span>Reset My Password</span>
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordForgetForm;
