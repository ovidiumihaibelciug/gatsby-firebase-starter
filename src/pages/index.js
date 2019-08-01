import React, { Fragment } from 'react';
import Layout from '../utils/layout';

const LandingPage = () => (
  <Fragment>
    <h1>Landing</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't
      signed in.
    </p>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
