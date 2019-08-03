import React from 'react';
import * as ROUTES from '../../../../constants/routes';
import { Link } from 'gatsby';

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetLink;
