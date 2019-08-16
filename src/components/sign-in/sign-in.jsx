import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {googleSignInStart} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

import {auth} from '../../firebase/firebase.utils';

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

    const {email, password} = this.state;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(error) {
      console.error(error);
    }

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
  googleSignInStarts: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);
