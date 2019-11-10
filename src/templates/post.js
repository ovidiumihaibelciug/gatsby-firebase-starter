import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

export class Post extends Component {
  render() {
    const {
      pageContext: { title, description, slug },
    } = this.props;

    console.log('loads', this.props);

    const isLoaded = this.props['*'] === slug;

    return (
      <Layout>
        <PostBase
          title={title}
          description={description}
          slug={this.props['*']}
          isLoaded={isLoaded}
        />
      </Layout>
    );
  }
}

export default Post;
