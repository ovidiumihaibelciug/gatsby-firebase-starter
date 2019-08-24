import React from 'react';
import { SIGN_IN, SIGN_UP } from '../../../../../../constants/routes';
import { Link } from 'gatsby';

const SignUpLink = ({ isRegister }) => (
  <p>
    {isRegister ? (
      <>
        Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
      </>
    ) : (
      <>
        Already have an account? <Link to={SIGN_IN}>Sign in</Link>
      </>
    )}
  </p>
);

export default SignUpLink;
