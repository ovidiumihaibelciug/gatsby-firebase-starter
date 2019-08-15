import React, { Component } from 'react';

import { navigate } from 'gatsby';

import { withFirebase } from '../../../../utils/Firebase';
import * as ROUTES from '../../../../constants/routes';
import Input from '../../../atoms/Input';

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
        navigate(ROUTES.HOME);
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
          <Input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            labelName="Email"
            required
          />

          <Input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            labelName="Password"
            className="input--no-margin"
            required
          />

          <button disabled={isInvalid} type="submit" className="btn">
            <span>Log in</span>
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}

export default withFirebase(SignInForm);
