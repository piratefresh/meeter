import React, { Component } from "react";
import styled from "styled-components";

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
  background: #3a264b;
`;
const SearchOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1% 10%;
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
            <SearchOptions>
              Looking for:
              <label htmlFor="query">
                <SearchInput
                  type="text"
                  id="query"
                  name="query"
                  placeholder="Keyword search"
                  required
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </label>
            </SearchOptions>
          </span>
        </SearchBar>
      </HeroWrapper>
    );
  }
}

export default Hero;
