import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

export class Post extends Component {
  render() {
    return (
      <Layout>
        <PostBase />
      </Layout>
    );
  }
}

export default Post;
