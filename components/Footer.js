import styled from 'styled-components';
import StyledLink from 'styles/StyledLink';


const SFooter = styled.footer`
  font-size: .85rem;
  text-align: center;
  
  position: absolute;
  bottom: 0px;
  left: -10%;
  
  width: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Footer = () => {

  return (<SFooter>
    © {new Date().getFullYear()}, Built with{" "}
    <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
  </SFooter>)
}

export default Footer