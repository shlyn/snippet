import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Mutation mutation={LOGIN_MUTATION} variables={{ email, password }}>
      {(login, { error, loading, data }) => {
        console.log(data);

        return (
          <Form onSubmit={preventDefault(async () => await login())}>
            <Header>Snippet</Header>
            <Input
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Username"
              type="text"
              name="email"
            />
            <Input
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              type="password"
              name="password"
            />
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
