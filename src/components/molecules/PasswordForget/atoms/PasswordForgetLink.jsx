import React from 'react';
import { PASSWORD_FORGET } from '../../../../constants/routes';
import { Link } from 'gatsby';

const PasswordForgetLink = () => (
  <p>
    <Link to={PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetLink;
