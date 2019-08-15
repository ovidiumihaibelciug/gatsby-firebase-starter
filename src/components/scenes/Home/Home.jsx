import React, { Component } from 'react';
import { Link } from 'gatsby';
import { withFirebase } from '../../../utils/Firebase';
import Input from '../../atoms/Input';

export class Home extends Component {
  _initFirebase = false;

  state = {
    posts: [],
    loading: true,
    title: '',
    description: '',
  };

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.getPosts();
    }
  };

  getPosts = () => {
    const { firebase } = this.props;

    firebase
      .posts()
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(item => item.data());
        this.setState({
          posts: data,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const { firebase } = this.props;

    firebase.posts().add({
      title,
      description,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { posts, description, title, loading } = this.state;

    if (loading) return null;

    return (
      <div className="home">
        <div className="home__details">
          <h1 className="home__title">Home Page</h1>
          <p className="home__description">
            The Home Page is accessible by every signed in user.
          </p>
        </div>

        <div className="home__posts">
          <div className="home__posts__form">
            <div className="home__posts__form__title">Add Posts</div>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="title"
                type="text"
                value={title}
                labelName="Title"
                onChange={this.handleChange}
                required
              />
              <Input
                name="description"
                type="text"
                value={description}
                labelName="Description"
                onChange={this.handleChange}
                required
              />

              <button
                type="submit"
                className="btn home__posts__form__btn"
                type="button"
              >
                <span>Submit</span>
              </button>
            </form>
          </div>

          <div className="home__posts__items">
            {posts.map((item, id) => (
              <div className="home__post">
                <div className="home__post__image" />
                <div className="home__post__text">
                  <Link
                    className="home__post__title"
                    to={'/post/' + item.title}
                    key={id}
                  >
                    {item.title}
                  </Link>
                  <div className="home__post__description" key={id}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(Home);
