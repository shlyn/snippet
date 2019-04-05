import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";
import { preventDefault } from "../Common/helpers";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
  ) {
    signup(email: $email, username: $username, password: $password) {
      id
      email
      username
      password
    }
  }
`;

function SignUp() {
  const state = {
    email: "a",
    username: "blake",
    password: "a"
  };

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={state}>
      {(signup, { error, loading, data }) => {
        console.log(data);

        return (
          <Form onSubmit={preventDefault(async () => await signup())}>
            <Header>Snippet</Header>
            <Input placeholder="Email" type="email" name="email" />
            <Input placeholder="Username" type="text" name="username" />
            <Input placeholder="Password" type="password" name="password" />
            <Button type="submit">Sign Up</Button>
          </Form>
        );
      }}
    </Mutation>
  );
}

export default SignUp;

const Form = styled.form`
  padding: 40px;
  background: ${colors.green};
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`;

const Header = styled.h1`
  color: ${colors.white};
  text-transform: uppercase;
`;

const Input = styled.input`
  height: 40px;
  max-width: 400px;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
`;
