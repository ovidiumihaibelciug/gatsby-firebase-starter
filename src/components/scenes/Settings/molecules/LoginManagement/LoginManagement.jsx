import React, { Component } from 'react';

import { withFirebase } from '../../../../../utils/Firebase';
import SocialLoginToggle from './atoms/SocialLoginToggle';
import {
  FaGithub,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from 'react-icons/fa';

const SIGN_IN_METHODS = [
  {
    id: 'google.com',
    provider: 'googleProvider',
    name: 'google',
    Icon: FaGoogle,
  },
  {
    id: 'facebook.com',
    provider: 'facebookProvider',
    name: 'facebook',
    Icon: FaFacebookF,
  },
  {
    id: 'twitter.com',
    provider: 'twitterProvider',
    name: 'twitter',
    Icon: FaTwitter,
  },
  {
    id: 'github.com',
    provider: 'githubProvider',
    name: 'github',
    Icon: FaGithub,
  },
];

class LoginManagement extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      activeSignInMethods: [],
      error: null,
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.fetchSignInMethods();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  fetchSignInMethods = () => {
    this.props.firebase.auth
      .fetchSignInMethodsForEmail(this.props.authUser.email)
      .then(activeSignInMethods =>
        this.setState({ activeSignInMethods, error: null }),
      )
      .catch(error => this.setState({ error }));
  };

  onSocialLoginLink = provider => {
    this.props.firebase.auth.currentUser
      .linkWithPopup(this.props.firebase[provider])
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  onUnlink = providerId => {
    this.props.firebase.auth.currentUser
      .unlink(providerId)
      .then(this.fetchSignInMethods)
      .catch(error => this.setState({ error }));
  };

  render() {
    const { activeSignInMethods, error } = this.state;
    const { className } = this.props;

    return (
      <div className={className}>
        <p>Sign In Methods</p>
        <div>
          {SIGN_IN_METHODS.map(signInMethod => {
            const onlyOneLeft = activeSignInMethods.length === 1;
            const isEnabled = activeSignInMethods.includes(
              signInMethod.id,
            );

            return (
              <div key={signInMethod.id}>
                <SocialLoginToggle
                  onlyOneLeft={onlyOneLeft}
                  isEnabled={isEnabled}
                  signInMethod={signInMethod}
                  onLink={this.onSocialLoginLink}
                  onUnlink={this.onUnlink}
                />
              </div>
            );
          })}
        </div>
        {error && error.message}
      </div>
    );
  }
}

export default withFirebase(LoginManagement);
