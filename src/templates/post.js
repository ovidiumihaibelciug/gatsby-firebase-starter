import React, { Component } from 'react';

export class Post extends Component {
  render() {
    return <div>{this.props.pageContext.title}</div>;
  }
}

export default Post;
