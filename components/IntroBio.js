import Image from './Image'
import styled from 'styled-components'

import { getSiteMetaData } from 'utils/helpers'
import { Hero, BigTitle, Subtitle } from 'styles/Text'
import StyledLink from '../styles/StyledLink'

export default function IntroBio({ targetRef }) {
  const { author, social } = getSiteMetaData()

  return (
    <Hero>
      <BigTitle>Jimmy Zhang</BigTitle>
      <Subtitle>Expert React Developer with an 👁 for Design</Subtitle>
      <div>
        <StyledLink onClick={() => targetRef.current.scrollTo(1)}>Blog</StyledLink>
      </div>
    </Hero>
  )
}
