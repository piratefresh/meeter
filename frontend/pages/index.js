import Categories from "../components/Categories";
import { Inner } from "../components/Page";
import styled from "styled-components";

const Hero = styled(Inner)`
  &&& {
    max-width: 100vw;
    img {
      height: 30vh;
    }
  }
`;

const Home = props => (
  <div>
    <Categories />
  </div>
);

export default Home;
