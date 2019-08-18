import React from 'react';
import { Link } from 'gatsby';
import { LANDING, SIGN_IN } from '../../../../constants/routes';

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default NavigationNonAuth;
