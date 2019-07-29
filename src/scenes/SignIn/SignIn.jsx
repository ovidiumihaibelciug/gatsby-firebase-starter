import React, { Component } from 'react';

import SignInForm from './components/SignInForm';
import SignInGoogle from './components/SignInGoogle';
import SignInFacebook from './components/SignInFacebook';
import SignInTwitter from './components/SignInTwitter';
import { SignUpLink } from '../../scenes/SignUp';
import { PasswordForgetLink } from '../PasswordForget';

export class SignIn extends Component {
  render() {
    return (
      <div>
        <SignInForm />
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

export default SignIn;
