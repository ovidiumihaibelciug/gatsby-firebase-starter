import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

export class Post extends Component {
  render() {
    const {
      pageContext: { title, description },
    } = this.props;

    return (
      <Layout>
        <PostBase
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
