import React, { Component } from 'react';

export class Post extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.pageContext.title}</div>;
  }
}

export default Post;
