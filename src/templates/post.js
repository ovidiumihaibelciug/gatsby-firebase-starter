import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

export class Post extends Component {
  render() {
    const {
      pageContext: { title, description },
    } = this.props;

    const isLoaded = this.props['*'] === title;

    return (
      <Layout>
        <PostBase
          title={isLoaded ? title : this.props['*']}
          description={description}
          isLoaded={isLoaded}
        />
      </Layout>
    );
  }
}

export default Post;
