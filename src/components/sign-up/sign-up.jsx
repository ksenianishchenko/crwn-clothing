import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signUpStart} from '../../redux/user/user.actions';

import {
  SignUpContainer,
  SignUpTitle
} from './sign-up.styles';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: ``,
      email: ``,
      password: ``,
      confirmPassword: ``
    }
  }

  handleSubmit =  async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    const {signUpStart} = this.props;

    if(password !== confirmPassword) {
      alert('Password don`t match');
      return;
    }

    signUpStart(email, password, displayName)
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          handleChange={this.handleChange}
          label={`Display name`}
          required
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={this.handleChange}
          label={`Email`}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={this.handleChange}
          label={`password`}
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={this.handleChange}
          label={`Confirm password`}
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);
