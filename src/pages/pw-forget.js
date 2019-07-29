import React, { Fragment } from 'react';

import Layout from '../components/layout';
import PasswordForgetForm from '../scenes/PasswordForget';

const PasswordForgetPage = () => (
  <Fragment>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </Fragment>
);

export default () => (
  <Layout>
    <PasswordForgetPage />
  </Layout>
);
