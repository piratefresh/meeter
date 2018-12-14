import Signup from "../components/Signup";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";
import styled from "styled-components";
import CenterMaxWidth from "../components/styles/CenterMaxWidth";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <CenterMaxWidth>
    <Columns>
      <Signup />
      <Signin />
      <RequestReset />
    </Columns>
  </CenterMaxWidth>
);

export default SignupPage;
