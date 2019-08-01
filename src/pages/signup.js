import React, { Fragment } from 'react';
import Layout from '../utils/layout';
import SignUp from '../scenes/SignUp/SignUp';

const SignUpPage = () => (
  <Fragment>
    <h1>SignUp</h1>
    <SignUp />
  </Fragment>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
