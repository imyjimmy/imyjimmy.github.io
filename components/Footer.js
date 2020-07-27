import styled from 'styled-components';
import StyledLink from 'styles/StyledLink';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomFontAwesomeIcon } from 'styles/FontAwesomeIcon'

const Copyright = styled.div`
  font-size: .85rem;

`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0px;
  left: -10%;
  
  text-align: center;

  width: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Social = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const FontAwesomeIcon = styled(CustomFontAwesomeIcon)`
  margin: .5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Social>
        <StyledLink href="https://github.com/imyjimmy"><FontAwesomeIcon icon={["fab", "github"]} /></StyledLink>
        <StyledLink href="https://linkedin.com/in/imyjimmy"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></StyledLink>
        <StyledLink href="https://twitter.com/imyjimmy"><FontAwesomeIcon icon={["fab", "twitter"]} /></StyledLink>
      </Social>
      <Copyright>
        © {new Date().getFullYear()}, Built with{" "}
        <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
      </Copyright>
    </StyledFooter>)
}

export default Footer