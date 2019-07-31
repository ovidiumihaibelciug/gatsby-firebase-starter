import React, { Fragment } from 'react';

import Layout from '../utils/layout';
import SignIn from '../scenes/SignIn/SignIn';

const SignInPage = () => (
  <Fragment>
    <h1>SignIn</h1>
    <SignIn />
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
