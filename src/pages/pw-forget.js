import React, { Fragment } from 'react';
import Layout from '../utils/layout';
import PasswordForget from '../components/scenes/PasswordForget/PasswordForget';

const PasswordForgetPage = () => (
  <Fragment>
    <PasswordForget />
  </Fragment>
);

export default () => (
  <Layout>
    <PasswordForgetPage />
  </Layout>
);
