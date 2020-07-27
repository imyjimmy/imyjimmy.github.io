import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const CustomFontAwesomeIcon = ({ className, children, ...rest }) => {

  return (<FAI className={className} {...rest}>{children}</FAI>)
}

// const FontAwesomeIcon = styled(CustomFontAwesomeIcon)`
// `;

export { CustomFontAwesomeIcon }