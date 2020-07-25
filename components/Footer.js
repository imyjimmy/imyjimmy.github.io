import styled from 'styled-components';

const SFooter = styled.footer`
  width: 80%;
`;

const Footer = () => {

  return (<SFooter>
    © {new Date().getFullYear()}, Built with{" "}
    <a href="https://nextjs.org/">Next.js</a>
  </SFooter>)
}

export default Footer