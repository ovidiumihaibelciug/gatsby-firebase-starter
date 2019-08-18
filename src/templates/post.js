import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

class Post extends Component {
  render() {
    const {
      pageContext: { title },
    } = this.props;

    return (
      <Layout>
        <PostBase title={title} />
      </Layout>
    );
  }
}

export default Post;
