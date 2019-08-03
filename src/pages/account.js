import React, { Fragment } from 'react';
import { compose } from 'recompose';
import Layout from '../utils/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';
import PasswordForgetForm from '../components/scenes/PasswordForget/PasswordForget';
import PasswordChangeForm from '../components/scenes/PasswordChange/PasswordChange';
import LoginManagement from '../components/scenes/Settings/molecules/LoginManagement/LoginManagement';

const AccountPageBase = () => (
  <Fragment>
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
          <LoginManagement authUser={authUser} />
        </div>
      )}
    </AuthUserContext.Consumer>
  </Fragment>
);

const condition = authUser => !!authUser;

const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPageBase);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
