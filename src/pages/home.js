import React from 'react';
import { compose } from 'recompose';
import Layout from '../utils/layout';
import { graphql } from 'gatsby';
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

export const query = graphql`
  query HomeSeo {
    site {
      siteMetadata {
        home {
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
