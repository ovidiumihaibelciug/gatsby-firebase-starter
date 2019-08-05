import React, { Component } from 'react';

export class Post extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.pageContext.id}</div>;
  }
}

export default Post;
