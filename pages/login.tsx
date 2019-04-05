import React from "react";
import { flexCenter } from "../components/Styles/helpers";
import styled from "styled-components";
import LogIn from "../components/Auth/LogIn";

function login() {
  return (
    <Container>
      <LogIn />
    </Container>
  );
}

export default login;

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;
