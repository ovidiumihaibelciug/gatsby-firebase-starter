import React, { Component } from 'react';
import { withFirebase } from '../../../utils/Firebase';
import PasswordForgetForm from './atoms/PasswordForgetForm';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForget extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
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
    const { email, error } = this.state;
    const { className } = this.props;

    const isInvalid = email === '';

    return (
      <PasswordForgetForm
        className={className}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        email={email}
        error={error}
        isInvalid={isInvalid}
      />
    );
  }
}

export default withFirebase(PasswordForget);
