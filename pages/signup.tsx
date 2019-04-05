import React from "react";
import SignUp from "../components/Auth/SignUp";
import { flexCenter } from "../components/Styles/helpers";
import styled from "styled-components";

function signup() {
  return (
    <Container>
      <SignUp />
    </Container>
  );
}

export default signup;

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;
