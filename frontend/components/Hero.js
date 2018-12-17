import React, { Component } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Link from "next/link";
import Router from "next/router";

const HeroWrapper = styled.div`
  position: relative;
  max-width: 100vw !important;
  padding: 0;
  margin: 0;
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
`;
const SearchBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 140px;
  background: hsl(272.4, 32.47%, 30.2%);
  button,
  input[type="submit"] {
    width: auto;
    background: hsl(276, 25%, 42%);
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;
const SearchOptions = styled.div``;
const Form = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  padding: 5% 10%;
  color: #fff;
  font-weight: 700;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 4em;
  &:hover,
  &:focus {
    outline: none;
  }
`;

class Hero extends Component {
  state = {
    text: "",
    query: ""
  };
  handleChange = e => {
    // allows us to change state of input
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <HeroWrapper>
        <img
          src="https://res.cloudinary.com/da91pbpmj/image/upload/v1544710609/priscilla-du-preez-697322-unsplash.jpg"
          alt="Search bar and header"
        />
        <SearchBar>
          <span styles={{ display: "block" }}>
            <Form>
              <SearchInput
                type="text"
                id="text"
                name="text"
                placeholder="Search for events"
                required
                value={this.state.text}
                onChange={this.handleChange}
              />
              <Link
                href={{
                  pathname: "search",
                  query: { query: this.state.text }
                }}
              >
                <button type="button">Search</button>
              </Link>
            </Form>
          </span>
        </SearchBar>
      </HeroWrapper>
    );
  }
}

export default Hero;
