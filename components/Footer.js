import styled from 'styled-components';
import { SocialLinkedin, SocialTwitter } from '@styled-icons/typicons';
import { Github } from '@styled-icons/boxicons-logos/Github';
import StyledLink from 'styles/StyledLink';

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

const WhiteTwitter = styled(SocialTwitter)`
  color: red;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Social>
        <StyledLink href="https://github.com/imyjimmy"><Github size="48"/></StyledLink>
        <StyledLink href="https://linkedin.com/in/imyjimmy"><SocialLinkedin size="48"/></StyledLink>
        <StyledLink href="https://twitter.com/imyjimmy"><SocialTwitter size="48"/></StyledLink>
      </Social>
      <Copyright>
        © {new Date().getFullYear()}, Built with{" "}
        <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
      </Copyright>
    </StyledFooter>)
}

export default Footer