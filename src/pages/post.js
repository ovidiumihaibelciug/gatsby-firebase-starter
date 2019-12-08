import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';
import { compose } from 'recompose';
import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';

const condition = authUser => !!authUser;

const PostPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(PostBase);

export class Post extends Component {
  render() {
    const {
      pageContext: { title, description },
    } = this.props;

    return (
      <Layout>
        <PostPage
          title={title}
          description={description}
          slug={this.props['*']}
          isLoaded={false}
        />
      </Layout>
    );
  }
}

export default Post;
