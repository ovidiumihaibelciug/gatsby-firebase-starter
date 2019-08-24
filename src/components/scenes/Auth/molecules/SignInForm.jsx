import React, { Component } from 'react';

import { navigate } from 'gatsby';

import { withFirebase } from '../../../../utils/Firebase';
import { HOME } from '../../../../constants/routes';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';

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

      this.initialRequest();
    }
  };

  initialRequest = () => {};

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  onSubmit = event => {
    const { email, password } = this.state;

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

  testFirebase = () => {};

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

          <Button disabled={isInvalid} type="submit" text="Log in" />

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}

export default withFirebase(SignInForm);
