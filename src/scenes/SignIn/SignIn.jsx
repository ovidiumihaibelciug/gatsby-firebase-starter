import React, { Component } from 'react';

import SignInForm from './molecules/SignInForm';
import SignInGoogle from './molecules/SignInGoogle';
import SignInFacebook from './molecules/SignInFacebook';
import SignInTwitter from './molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import PasswordForgetLink from '../../molecules/PasswordForget/atoms/PasswordForgetLink';

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
