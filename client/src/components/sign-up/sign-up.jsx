import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signUpStart} from '../../redux/user/user.actions';

import {
  SignUpContainer,
  SignUpTitle
} from './sign-up.styles';

const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: ``,
    email: ``,
    password: ``,
    confirmPassword: ``
  })

  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit =  async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('Password don`t match');
      return;
    }

    signUpStart(email, password, displayName)
  }

  const handleChange = event => {
    const {value, name} = event.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        name='displayName'
        type='text'
        value={displayName}
        handleChange={handleChange}
        label={`Display name`}
        required
      />
      <FormInput
        name='email'
        type='email'
        value={email}
        handleChange={handleChange}
        label={`Email`}
        required
      />
      <FormInput
        name='password'
        type='password'
        value={password}
        handleChange={handleChange}
        label={`password`}
        required
      />
      <FormInput
        name='confirmPassword'
        type='password'
        value={confirmPassword}
        handleChange={handleChange}
        label={`Confirm password`}
        required
      />
      <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);
