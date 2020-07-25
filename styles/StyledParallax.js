import styled from 'styled-components';
import { Parallax as P, ParallaxLayer as PL } from 'react-spring/addons.cjs';

const CustomParallax = ({ className, children, ...rest }) => {
  return (
    <P className={className} {...rest}>{children}</P>
  )
}

const CustomParallaxLayer = ({ className, children, ...rest }) => {
  return (<PL className={className} {...rest}>{children}</PL>)
}

const Parallax = styled(CustomParallax)`
`;

const ParallaxLayer = styled(CustomParallaxLayer)`
  margin: 0 10% 0;
`;


export { Parallax, ParallaxLayer };