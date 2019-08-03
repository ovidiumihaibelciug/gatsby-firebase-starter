import React from 'react';

import { withFirebase } from '../../../../utils/Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase ? firebase.doSignOut : () => {}}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
