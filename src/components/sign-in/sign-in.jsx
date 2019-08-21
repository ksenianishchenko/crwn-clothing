import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';


const SignIn = ({emailAndPasswordSignIn, googleSignInStarts}) => {
  const [userCredentials, setCredentials] = useState({email: ``, password: ``})

  const {email, password} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailAndPasswordSignIn(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return <SignInContainer>
    <SignInTitle>I already have an account</SignInTitle>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        name='email'
        type='email'
        value={email}
        handleChange={handleChange}
        label={`email`}
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
      <ButtonsBarContainer>
        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton type='button' onClick={googleSignInStarts} isGoogleSignIn>Sign In With Google</CustomButton>
      </ButtonsBarContainer>
    </form>
  </SignInContainer>
}

const mapDispatchToProps = dispatch => ({
  googleSignInStarts: () => dispatch(googleSignInStart()),
  emailAndPasswordSignIn : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
