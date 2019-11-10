import React, { Component } from 'react';
import { withFirebase } from '../../../utils/Firebase';

class Post extends Component {
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
    const { isLoaded } = this.props;
    if (!isLoaded) {
      this.firebaseInit();
    }
  }

  componentDidUpdate() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      this.firebaseInit();
    }
  }

  getPost = () => {
    const { firebase, slug } = this.props;

    firebase
      .post({ slug })
      .get()
      .then(result => {
        this.setState({
          post: result.docs && result.docs[0].data(),
          loading: false,
        });
      });
  };

  render() {
    const { loading, post } = this.state;
    const { isLoaded, title, description } = this.props;

    const finalDescription = isLoaded
      ? description
      : post && post.description;
    const finalTitle = isLoaded ? title : post && post.title;

    if (!isLoaded && loading) return null;

    return (
      <div className="post container">
        <h1>{finalTitle}</h1>
        <div>{finalDescription}</div>
      </div>
    );
  }
}

export default withFirebase(Post);
