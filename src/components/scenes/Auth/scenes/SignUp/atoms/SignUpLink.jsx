import React from 'react';
import * as ROUTES from '../../../../../../constants/routes';
import { Link } from 'gatsby';

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpLink;
