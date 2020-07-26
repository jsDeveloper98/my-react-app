import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const SignUpForm = ({
  validated,
  firstName,
  lastName,
  email,
  password,
  country,
  handleSubmit,
  handleChange,
  agree,
  toggleTerms,
}) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group
          className="sign-up-form-group"
          md="4"
          controlId="validationCustom01"
        >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={handleChange}
            value={firstName}
            name="fistName"
            autoComplete="off"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter a Firstname.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="sign-up-form-group"
          md="4"
          controlId="validationCustom02"
        >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={handleChange}
            value={lastName}
            name="lastName"
            autoComplete="off"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter a Lastname.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="sign-up-form-group"
          md="4"
          controlId="validationCustomUsername"
        >
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
              value={email}
              name="email"
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row className="sign-up-form">
        <Form.Group
          className="sign-up-form-group"
          md="6"
          controlId="validationCustom03"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={password}
            name="password"
            autoComplete="off"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter a Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="sign-up-form-group"
          md="3"
          controlId="validationCustom04"
        >
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            required
            onChange={handleChange}
            value={country}
            name="country"
            autoComplete="off"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid country.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group className="sign-up-form-conditions">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          checked={agree}
          onChange={toggleTerms}
        />
      </Form.Group>
      <div className="sign-up-form-btn-wrapper">
        <Button className="sign-up-form-btn" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
