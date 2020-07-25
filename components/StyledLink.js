import Link from "next/link";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${ props => props.theme.textColor};
`;

export default StyledLink