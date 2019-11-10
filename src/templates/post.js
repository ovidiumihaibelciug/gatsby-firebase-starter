import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';

export class Post extends Component {
  render() {
    const {
      pageContext: { title, description, slug },
      uri,
    } = this.props;

    const uriItems = uri.split('/');

    const uriSlug = uriItems[uriItems.length - 1];

    const isLoaded = uriSlug === slug;

    return (
      <Layout>
        <PostBase
          title={title}
          description={description}
          slug={slug || uriSlug}
          isLoaded={isLoaded}
        />
      </Layout>
    );
  }
}

export default Post;
