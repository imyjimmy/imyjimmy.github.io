import styled from 'styled-components'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
  height: 100vh;
  width: 30vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 100%;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.0rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {

  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">🏡</span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="shenanigans">🤓</span>
        Shenanigans
        </a>
      <a href="/">
        <span role="img" aria-label="thingys">📩</span>
        Thingys
        </a>
    </StyledMenu>
  )
}

export default Menu