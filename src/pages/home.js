import React from 'react';
import { graphql } from 'gatsby';
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

export default props => {
  console.log(props);
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export const query = graphql`
  query HomeSeo {
    site {
      siteMetadata {
        app {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
        }
      }
    }
  }
`;
