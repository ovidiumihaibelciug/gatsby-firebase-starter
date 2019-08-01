import React from 'react';

const PasswordForgetForm = ({
  onSubmit,
  onChange,
  isInvalid,
  error,
  email,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordForgetForm;
