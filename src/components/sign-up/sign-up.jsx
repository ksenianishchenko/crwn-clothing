import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

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

    if(password !== confirmPassword) {
      alert("Password don`t match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword({
        email,
        password
      });

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: ``,
        email: ``,
        password: ``,
        confirmPassword: ``
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <form className="sign-up-form" onClick={this.handleSubmit}>
        <FormInput
          name="displayName"
          type="password"
          value={displayName}
          handleChange={this.handleChange}
          label={`Display name`}
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={this.handleChange}
          label={`Email`}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={this.handleChange}
          label={`password`}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={this.handleChange}
          label={`Confirm password`}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;