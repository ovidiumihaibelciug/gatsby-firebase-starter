import React, { Component } from 'react';
import { AuthUserContext } from '../../../utils/Session';

import NavigationAuth from './atoms/NavigationAuth';
import NavigationNonAuth from './atoms/NavigationNonAuth';

class Navigation extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <NavigationAuth authUser={authUser} />
          ) : (
            <NavigationNonAuth />
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

export default Navigation;
