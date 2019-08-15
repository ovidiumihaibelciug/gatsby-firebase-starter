import React, { Component } from 'react';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../../../utils/Session';
import { compose } from 'recompose';
import PasswordForgetForm from '../../molecules/PasswordForget/atoms/PasswordForgetForm';
import PasswordChangeForm from '../../molecules/PasswordChange/molecules/PasswordChangeForm';
import LoginManagement from './molecules/LoginManagement/LoginManagement';

export class Account extends Component {
  render() {
    return (
      <div className="settings">
        <AuthUserContext.Consumer>
          {authUser => (
            <div>
              <h1>Account: {authUser.email}</h1>
              <PasswordForgetForm className="settings__password-forget" />
              <PasswordChangeForm className="settings__password-change" />
              <LoginManagement
                className="settings__login-management"
                authUser={authUser}
              />
            </div>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(Account);

export default AccountPage;
