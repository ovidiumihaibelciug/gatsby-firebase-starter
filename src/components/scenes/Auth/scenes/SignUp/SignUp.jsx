import React, { Component } from 'react';
import SignUpFormBase from './molecules/SignUpFormBase';
import SignInGoogle from '../../molecules/SignInGoogle';
import SignInFacebook from '../../molecules/SignInFacebook';
import SignInTwitter from '../../molecules/SignInTwitter';
import SignUpLink from '../../scenes/SignUp/atoms/SignUpLink';
import SignInGithub from '../../molecules/SignInGithub';

class SignUp extends Component {
  render() {
    return (
      <div className="register">
        <div className="register__image" />
        <div className="register__content">
          <div className="register__content__inner">
            <div className="register__content__header">
              <img
                className="register__content__header__logo"
                src="https://user-images.githubusercontent.com/21834/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg"
                alt="logo"
              />
              <div className="register__content__header__title">
                Gatsby + Firebase Starter
              </div>
            </div>
            <div className="register__content__fields">
              <div className="register__content__form">
                <SignUpFormBase />
              </div>
              <div className="register__content__or">
                <span className="register__content__or__line" />
                <span className="register__content__or__text">
                  or
                </span>
                <span className="register__content__or__line" />
              </div>
              <div className="register__content__providers">
                <div className="register__content__providers--left">
                  <SignInGoogle />
                  <SignInGithub />
                </div>
                <div className="register__content__providers--right">
                  <SignInTwitter />
                  <SignInFacebook />
                </div>
              </div>
            </div>
            <div className="register__content__register">
              <SignUpLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
