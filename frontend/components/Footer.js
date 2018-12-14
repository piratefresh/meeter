import styled from "styled-components";

const FooterWrapper = styled.div`
  background: ${props => props.theme.green};
  color: #fff;
  height: 10vh;
  width: 100%;
  z-index: 2;
  h1 {
    font-weight: 800;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h2>Meeter</h2>
    <p>made by James and Magnus</p>
  </FooterWrapper>
);

export default Footer;
