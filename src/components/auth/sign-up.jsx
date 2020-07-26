import React, { Component } from "react";
import SignUpForm from "../../helper-components/sign-up-form";
import { createUser } from "../../functions/user-functions";

class SignUp extends Component {
  state = {
    validated: false,
    fistName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    agree: false,
  };

  signUp = (e) => {
    const { email, password, fistName, lastName, country, agree } = this.state;
    e.preventDefault();
    e.stopPropagation();

    this.setState({ validated: true });

    if (!agree) {
      return;
    }

    createUser(email, password, fistName, lastName, country);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleTerms = () => {
    this.setState({ agree: !this.state.agree });
  };

  render() {
    const {
      validated,
      fistName,
      lastName,
      email,
      password,
      country,
      agree,
    } = this.state;

    return (
      <div className="sign-up">
        <SignUpForm
          validated={validated}
          fistName={fistName}
          lastName={lastName}
          email={email}
          password={password}
          country={country}
          handleSubmit={this.signUp}
          handleChange={this.handleChange}
          agree={agree}
          toggleTerms={this.toggleTerms}
        />
      </div>
    );
  }
}

export default SignUp;
