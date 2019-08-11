import React, { Component } from 'react';

import SignInForm from '../../molecules/molecules/SignInForm';
import SignInGoogle from '../../molecules/molecules/SignInGoogle';
import SignInFacebook from '../../molecules/molecules/SignInFacebook';
import SignInTwitter from '../../molecules/molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import PasswordForgetLink from '../../../../molecules/PasswordForget/atoms/PasswordForgetLink';
import SignInGithub from '../../molecules/molecules/SignInGithub';

export class SignIn extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__content">
          <div className="login__content__inner">
            <div className="login__content__header">
              <img
                className="login__content__header__logo"
                src="https://user-images.githubusercontent.com/21834/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg"
              />
              <div className="login__content__header__title">
                Gatsby + Firebase Starter
              </div>
            </div>
            <div className="login__content__login-form">
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
                <div className="login__content__providers--left">
                  <SignInGoogle />
                  <SignInGithub />
                </div>
                <div className="login__content__providers--right">
                  <SignInTwitter />
                  <SignInFacebook />
                </div>
              </div>
            </div>
            <div className="login__content__register">
              <SignUpLink isRegister />
            </div>
          </div>
        </div>
        <div className="login__image" />
      </div>
    );
  }
}

export default SignIn;
