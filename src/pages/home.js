import React from 'react';
import { compose } from 'recompose';
import Layout from '../utils/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';

const HomePageBase = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
  </Layout>
);
