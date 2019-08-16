import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {emailAndPasswordSignIn} = this.props;

    const {email, password} = this.state;
    emailAndPasswordSignIn(email, password)
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStarts} = this.props;
    return <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={this.state.email}
          handleChange={this.handleChange}
          label={`email`}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={this.state.password}
          handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStarts: () => dispatch(googleSignInStart()),
  emailAndPasswordSignIn : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
