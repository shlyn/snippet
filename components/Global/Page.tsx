import React, { ReactChild } from "react";
import { flexCenter } from "../Styles/helpers";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../Header/Header";

type Props = { children: ReactChild };

function Page({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Header />
        <Inner>{children}</Inner>
        <GlobalStyle />
      </StyledPage>
    </ThemeProvider>
  );
}

export default Page;

const theme = {
  lightBlue: "#77C9D4",
  green: "#57BC90",
  darkGreen: "#015249",
  gray: "#A5A5AF",
  white: "#FFF",
  black: "#393939",
  offWhite: "#EDEDED",
  maxWidth: "1200px",
  boxShadow: "0 12px 24px 0 rgba(0,0,0,0.1)"
};

const Inner = styled.div`
 ${flexCenter}
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const GlobalStyle = createGlobalStyle` 
  @font-face {
    font-family: 'radnika-next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal; 
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0; 
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika-next';
  }
  a {
    text-decoration: none;
  }
  button {
    :hover {
      cursor: pointer;
    } 
  }
  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    ::placeholder {
      color: ${props => props.theme.gray};
    }
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
