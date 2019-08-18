import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <div>{this.props.pageContext.id}</div>;
  }
}

export default Comment;
