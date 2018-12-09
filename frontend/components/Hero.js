import React, { Component } from "react";
import styled from "styled-components";
import { Inner } from "../components/Page";

/* const HeroWrapper = styled.div`
  img {
    height: 30vh;
    width: 100%;
  }
`;
 */
const HeroWrapper = styled(Inner)`
  && {
    max-width: 100vw;
    img {
      height: 30vh;
    }
  }
`;

class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <img
          src="https://res.cloudinary.com/da91pbpmj/image/upload/v1544389906/jason-leung-479251-unsplash.jpg"
          alt="Search bar and header"
          srcset=""
        />
      </HeroWrapper>
    );
  }
}

export default Hero;
