import Image from "./Image";
import styled from 'styled-components'

import { getSiteMetaData } from "utils/helpers";

// const Hero = styled.div`
//   ${tw('w-full xl:w-2/3')};
// `;

// const BigTitle = styled.h1`
//   ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
//   text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
// `;

// const Subtitle = styled.p`
//   ${tw('text-2xl lg:text-3xl font-sans text-white mt-8 xxl:w-3/4')};
//   text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
// `;

export default function Bio() {
  const { author, social } = getSiteMetaData();

  return (
    <div>
      <h1>Jimmy Zhang</h1>
      <h2>I write code and perform standup comedy</h2>
    </div>
    // <Hero>
    //   <BigTitle>Jimmy Zhang
    // <br />
    //   </BigTitle>
    //   <Subtitle>I write code and perform stand up comedy</Subtitle>
    // </Hero>
  );
}
