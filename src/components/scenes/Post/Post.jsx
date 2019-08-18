import React, { Component } from 'react';
import { withFirebase } from '../../../utils/Firebase';

export class Post extends Component {
  _initFirebase = false;

  state = {
    post: null,
    loading: true,
  };

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.getPost();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  getPost = () => {
    const { firebase, title } = this.props;

    firebase
      .post({ title })
      .get()
      .then(result => {
        this.setState({
          post: result.docs[0].data(),
          loading: false,
        });
      });
  };

  render() {
    const { loading, post } = this.state;

    if (loading) return null;

    return (
      <div>
        <h1>{post.title}</h1>
        <div>{post.description}</div>
      </div>
    );
  }
}

export default withFirebase(Post);
