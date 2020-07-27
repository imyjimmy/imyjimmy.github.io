import { LayoutTheme } from 'components/Layout';
import styled from 'styled-components';

const LayoutThemeComedy = styled(LayoutTheme)`
  color: #000;
`;

const Comedy = () => {
  return (<LayoutThemeComedy><div>Welcome to My Secret Comedy Page</div></LayoutThemeComedy>)
}



export default Comedy;