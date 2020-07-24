import Image from "./Image";
import styled from 'styled-components'

import { getSiteMetaData } from "utils/helpers";

const Hero = styled.div`
  width: 100%;
  
`;

const BigTitle = styled.h1`
  font-family: 'Cantata One', Constantia, "Lucida Bright";
  font-size: 90px;
  
  letter-spacing: 0.05em;
  line-height: 99px;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);

  display: block;
  margin-bottom: 1.5rem;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Subtitle = styled.p`
  font-family: "Open Sans", BlinkMacSystemFont, "Segoe UI", Roboto;
  font-size: 1.875rem;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  margin-bottom: 1.67rem;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default function Bio() {
  const { author, social } = getSiteMetaData();

  return (
    <Hero>
      <BigTitle>Jimmy Zhang</BigTitle>
      <Subtitle>I write code & perform standup comedy</Subtitle>
    </Hero>
    // <Hero>
    //   <BigTitle>Jimmy Zhang
    // <br />
    //   </BigTitle>
    //   <Subtitle>I write code and perform stand up comedy</Subtitle>
    // </Hero>
  );
}
