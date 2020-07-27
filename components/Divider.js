import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/addons.cjs';

const Divider = styled(ParallaxLayer)`
  position: absolute;
  width: 100vw;
  height: 110vh;
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export default Divider

/* <Parallax pages={5}>

<Content speed={0.4} offset={0}>
  <Hero>
    <BigTitle>Jimmy Zhang
      <br />
    </BigTitle>
    <Subtitle>I write code & perform stand up comedy.</Subtitle>
  </Hero>
</Content>
{/*<Divider
  //bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
  bg="#FFFFFF"
  speed={-0.2}
  offset={1.1}
  factor={2}
/>*/
/* <Content speed={0.6} offset={1}>
  <Inner>
    <Title>Content Forthcoming.</Title>
    <ContactText>
      In the meantime, enjoy this bare-bones web experience.
    </ContactText>
  </Inner>
</Content>
<Content speed={0.4} offset={4}>
  <Inner>
    <Title>Get in touch</Title>
    <ContactText>
      Say <a href="mailto:plizNoSp4m@domain.tld">hi</a> or find me on <a href="https://www.twitter.com/imyjimmy/">Twitter</a>.
    </ContactText>
  </Inner>
  <Footer>
    &copy; 2019 by Jimmy Fan Zhang.{' '}
    <a href="https://github.com/imyjimmy/imyjimmy.github.io">Github Repository</a> for this website.
  </Footer>
</Content>

</Parallax> */
