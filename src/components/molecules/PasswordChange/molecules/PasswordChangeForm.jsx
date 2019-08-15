import React from 'react';
import Input from '../../../atoms/Input';

const PasswordChangeForm = ({
  isInvalid,
  error,
  passwordOne,
  passwordTwo,
  onSubmit,
  onChange,
  className,
}) => {
  return (
    <form className={className} onSubmit={e => onSubmit(e)}>
      <Input
        name="passwordOne"
        value={passwordOne}
        onChange={e => onChange(e)}
        type="password"
        labelName="New Password"
        required
      />
      <Input
        name="passwordTwo"
        value={passwordTwo}
        onChange={e => onChange(e)}
        type="password"
        labelName="Confirm New Password"
        required
      />
      <button disabled={isInvalid} type="submit" className="btn">
        <span>Reset My Password</span>
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordChangeForm;
