import styled from 'react-emotion';
import { ParallaxLayer } from 'react-spring/dist/addons';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export default Divider