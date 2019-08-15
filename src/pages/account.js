import React, { Fragment } from 'react';
import Layout from '../utils/layout';
import Account from '../components/scenes/Settings/Settings';

const AccountPage = () => (
  <Fragment>
    <Account />
  </Fragment>
);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
