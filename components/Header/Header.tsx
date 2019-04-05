import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/list-fc">
          <a>List Example (as Functional Component)</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        <Link href="/login">
          <a>Log In</a>
        </Link>{" "}
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>{" "}
        |{" "}
      </nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
`;
