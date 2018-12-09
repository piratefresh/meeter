import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";

// Reusable css varibles
const theme = {
  green: "#62C890",
  black: "#393939",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1200px",
  bs: "0 12px 24px 0 rgba(0,0,0, 0.09)", // Box shadow
  breakdownPoint: "1300px"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px; /* Base font size is 10px */
  }
  *,*:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem; /* 15px approx */
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* Lets us passdown values */}
        <StyledPage>
          <Meta />
          <Header />
          <Inner className={this.props.className}>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;

export { Inner };
