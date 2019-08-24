import React from 'react';
import Layout from '../utils/layout';
import Account from '../components/scenes/Settings/Settings';
import { compose } from 'recompose';
import {
  withEmailVerification,
  withAuthorization,
} from '../utils/Session';

const condition = authUser => !!authUser;
const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(Account);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
