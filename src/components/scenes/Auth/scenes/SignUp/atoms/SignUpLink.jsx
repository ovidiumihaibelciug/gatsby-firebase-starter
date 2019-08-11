import React from 'react';
import * as ROUTES from '../../../../../../constants/routes';
import { Link } from 'gatsby';

const SignUpLink = ({ isRegister }) => (
  <p>
    {isRegister ? (
      <>
        Don't have an account?{' '}
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </>
    ) : (
      <>
        Already have an account?{' '}
        <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      </>
    )}
  </p>
);

export default SignUpLink;
