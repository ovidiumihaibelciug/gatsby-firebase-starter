import React from 'react';
import { compose } from 'recompose';
import Layout from '../utils/layout';

import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';
import Home from '../components/scenes/Home/Home';

const condition = authUser => !!authUser;
const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);

export default () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};
