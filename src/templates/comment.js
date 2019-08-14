import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    return <div>{this.props.pageContext.id}</div>;
  }
}

export default Comment;
