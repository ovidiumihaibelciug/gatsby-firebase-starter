import React from 'react';
import { navigate } from 'gatsby';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import { SIGN_IN } from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    _initFirebase = false;

    firebaseInit = () => {
      if (this.props.firebase && !this._initFirebase) {
        this._initFirebase = true;

        console.log('test');

        this.listener = this.props.firebase.onAuthUserListener(
          authUser => {
            console.log('test');

            if (!condition(authUser)) {
              navigate(SIGN_IN);
            }
          },
          () => navigate(SIGN_IN),
        );
      }
    };

    componentDidMount() {
      this.firebaseInit();
    }

    componentDidUpdate() {
      this.firebaseInit();
    }

    componentWillUnmount() {
      this.listener && this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
