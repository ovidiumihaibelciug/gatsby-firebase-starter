import React, { Fragment } from 'react';

import Layout from '../utils/layout';
import PasswordForget from '../scenes/PasswordForget/PasswordForget';

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
