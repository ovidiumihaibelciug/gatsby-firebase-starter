import React, { Component } from 'react';
import { AuthUserContext } from '../../../utils/Session';
import PasswordForgetForm from '../../molecules/PasswordForget/PasswordForget';
import PasswordChangeForm from '../../molecules/PasswordChange/PasswordChange';
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

export default Account;
