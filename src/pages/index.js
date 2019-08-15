import React, { Fragment } from 'react';
import Layout from '../utils/layout';
import Landing from '../components/scenes/Landing/Landing';

const LandingPage = () => (
  <Fragment>
    <Landing />
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
