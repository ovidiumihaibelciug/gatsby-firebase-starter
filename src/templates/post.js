import React, { Component } from 'react';
import Layout from '../utils/layout';
import Post from '../components/scenes/Post/Post';

class PostBase extends Component {
  render() {
    const {
      pageContext: { title },
    } = this.props;

    return (
      <Layout>
        <Post title={title} />
      </Layout>
    );
  }
}

export default PostBase;
