import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { withFirebase } from '../../components/Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

const SignInForm = withFirebase(SignInFormBase);

const SignInGoogle = withFirebase(SignInGoogleBase);

const SignInFacebook = withFirebase(SignInFacebookBase);

const SignInTwitter = withFirebase(SignInTwitterBase);

export default SignInForm;

export { SignInGoogle, SignInFacebook, SignInTwitter };
