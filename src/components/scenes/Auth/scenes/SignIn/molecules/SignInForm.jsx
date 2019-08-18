import React, { Component } from 'react';

import { navigate } from 'gatsby';

import { withFirebase } from '../../../../../utils/Firebase';
import { HOME } from '../../../../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.test();
    }
  };

  test = () => {
    console.log('asdasdasda', this.props.firebase);
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  onSubmit = event => {
    const { email, password } = this.state;

    console.log(this.props.firebase);

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        navigate(HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  testFirebase = () => {
    console.log(this.props.firebase);
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="group">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>

          <div className="group group__password">
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
          <button
            disabled={isInvalid}
            type="submit"
            className="btn"
            type="button"
          >
            <span>Log in</span>
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}

export default withFirebase(SignInForm);
