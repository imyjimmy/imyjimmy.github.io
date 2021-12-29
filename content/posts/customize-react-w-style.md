---
title: Customize the Look & Feel of React Components with Styled Components 
description: Override that default look and give your components some swag 😎
date: 2020-07-26T11:00:00.000Z
---

styled-components is a package that gives you a modularized way to apply targeted styles to _ just _ the React components you want--no more css class name conflicts and specificity wars. I never got good at css specificity wars, and I suspect that there's only a handful of people in the world who are truly good at it.

Here's an example of how to attach a specific style just to one kind of `<div>`:

```jsx
import styled from 'styled-components';

const Social = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
```
The syntax is as follows: you assert that there's a special component, in my case `<Social>`, which is really a "styled div." In the backticks you can write whatever css you want and those rules are localized to `Social`. Then you run around your project, replacing `<div>`'s with `<Social>` to your heart's content. I used it to great effect in my Footer:

```jsx
const Footer = () => {
  return (
    <StyledFooter>
      <Social>
        <StyledLink href="https://github.com/imyjimmy">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </StyledLink>
        <StyledLink href="https://linkedin.com/in/imyjimmy">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </StyledLink>
        <StyledLink href="https://twitter.com/imyjimmy">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </StyledLink>
      </Social>
      <Copyright>
        © {new Date().getFullYear()}, Built with{" "}
        <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
      </Copyright>
    </StyledFooter>)
}
```
## Use Styled Components on React Components

It is possible to used styled-components on more than simple HTML elements. You can use them on entire React components. You'll have to keep in mind the [following](https://styled-components.com/docs/basics#styling-any-component): "The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element."

What you have to do is to remember to pass the prop `className` along. As an example, I used it on a Parallax component from React-Spring:

```jsx
import styled from 'styled-components';
import { Parallax as P, ParallaxLayer as PL } from '@react-spring/parallax';

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
```

Notice the passing of className to the base React-Spring component.

In the relevant file, I simply import `ParallaxLayer` as if everything is normal, and proceed to use it normally, but it's really importing from my custom file which allowed me to attach the margin rule.

```jsx
import { Parallax, ParallaxLayer } from 'styles/StyledParallax'; 
//overrides of Parallax from '@react-spring/parallax';
```
Finally I get the margins that I want, which seems trivial, but at least this particular rule is isolated to just ParallaxLayer and not conflicting with anything else.

<!-- Here's a picture of a cat: 

![cat](cat.jpg) -->