import React from 'react';
import { Link } from 'gatsby';
import * as ROUTES from '../../../constants/routes';

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default NavigationNonAuth;
