import React from 'react';

const PasswordChangeForm = ({
  isInvalid,
  error,
  passwordOne,
  passwordTwo,
  onSubmit,
  onChange,
}) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={e => onChange(e)}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={e => onChange(e)}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordChangeForm;
