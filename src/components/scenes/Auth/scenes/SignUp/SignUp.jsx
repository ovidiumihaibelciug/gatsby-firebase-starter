import React, { Component } from 'react';
import SignUpFormBase from './molecules/SignUpFormBase';
import SignInGoogle from '../../molecules/molecules/SignInGoogle';
import SignInFacebook from '../../molecules/molecules/SignInFacebook';
import SignInTwitter from '../../molecules/molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import PasswordForgetLink from '../../../../molecules/PasswordForget/atoms/PasswordForgetLink';
import SignInGithub from '../../molecules/molecules/SignInGithub';

export class SignUp extends Component {
  render() {
    return (
      <div className="register">
        <div className="login__content__form">
          <SignUpFormBase />
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
          <div className="login__content__providers--left">
            <SignInGoogle />
            <SignInGithub />
          </div>
          <div className="login__content__providers--right">
            <SignInTwitter />
            <SignInFacebook />
          </div>
        </div>
        <div className="login__content__register">
          <SignUpLink />
        </div>
      </div>
    );
  }
}

export default SignUp;
