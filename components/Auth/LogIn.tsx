import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/colors";
import { preventDefault } from "../Common/helpers";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      password
    }
  }
`;

function LogIn() {
  return (
    <Mutation
      mutation={LOGIN_MUTATION}
      variables={{ email: "a", password: "a" }}
    >
      {(login, { error, loading, data }) => {
        console.log(data);

        return (
          <Form onSubmit={preventDefault(async () => await login())}>
            <Header>Snippet</Header>
            <Input placeholder="Username" type="text" name="username" />
            <Input placeholder="Password" type="password" name="password" />
            <Button type="submit">Log In</Button>
          </Form>
        );
      }}
    </Mutation>
  );
}

export default LogIn;

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
