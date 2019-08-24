import React, { Component } from 'react';

import { withFirebase } from '../../../utils/Firebase';
import PasswordChangeForm from './molecules/PasswordChangeForm';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChange extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const { className } = this.props;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <PasswordChangeForm
        className={className}
        passwordOne={passwordOne}
        passwordTwo={passwordTwo}
        error={error}
        isInvalid={isInvalid}
        onSubmit={e => this.onSubmit(e)}
        onChange={e => this.onChange(e)}
      />
    );
  }
}

export default withFirebase(PasswordChange);
