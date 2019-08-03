import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-page.styles.scss';

const SignInPage = () => {
  return <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
}

export default SignInPage;
