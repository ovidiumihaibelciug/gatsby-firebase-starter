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
      <div className="login">
        <div className="login__content">
          <div className="login__content__inner">
            <div className="login__content__title">Log in</div>
            <div className="login__content__form">
              <SignInForm />
            </div>
            <div className="login__content__password-forget">
              <PasswordForgetLink />
            </div>
            <div className="login__content__or">
              <span className="login__content__or__line" />
              <span className="login__content__or__text">or</span>
              <span className="login__content__or__line" />
            </div>
            <div className="login__content__providers">
              <SignInGoogle />
              <SignInFacebook />
              <SignInTwitter />
            </div>
            <div className="login__content__register">
              <SignUpLink />
            </div>
          </div>
        </div>
        <div className="login__image" />
      </div>
    );
  }
}

export default SignIn;
