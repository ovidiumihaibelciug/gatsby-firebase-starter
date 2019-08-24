import React, { Component } from 'react';
import { withFirebase } from '../../../../../../utils/Firebase';
import { HOME } from '../../../../../../constants/routes';
import { navigate } from 'gatsby';
import Input from '../../../../../atoms/Input';
import Button from '../../../../../atoms/Button';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
    An account with this E-Mail address already exists.
    Try to login with this account instead. If you think the
    account is already used from one of the social logins, try
    to sign in with one of them. Afterward, associate your accounts
    on your personal account page.
  `;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        navigate(HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div>
        <Input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          required={true}
          labelName="Username"
        />

        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          required={true}
          labelName="Email"
        />

        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          required={true}
          labelName="Password"
        />

        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          required={true}
          labelName="Confirm Password"
          className="input--no-margin"
        />

        <Button
          type="submit"
          disabled={isInvalid}
          onClick={this.onSubmit}
          text="Sign Up"
        />

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default withFirebase(SignUpFormBase);
