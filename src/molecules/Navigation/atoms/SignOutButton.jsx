import React from 'react';

import { withFirebase } from '../../../components/Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase ? firebase.doSignOut : () => {}}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
