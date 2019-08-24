import React from 'react';

import { withFirebase } from '../../../../utils/Firebase';

const SignOutButton = ({ firebase }) => (
  <div
    className="signout-btn"
    onClick={firebase ? firebase.doSignOut : () => {}}
  >
    Sign Out
  </div>
);

export default withFirebase(SignOutButton);
