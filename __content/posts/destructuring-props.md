---
title: Several Ways of Destructuring React props 
description: Destructuring. Do it right and your team will thank you
date: 2020-08-11T11:00:00.000Z
---

Destructuring is a cool way of "unpacking" items in an iterable structure (arrays), without having to list all of them. You can also use destructuring to pass react props _into_ child components. Knowing how to do this correctly, however, is a source of confusion. Here are some common ways for a component to accept destructured props right off the bat:

## Example: Name only the props you need
```jsx
function GridItem({ item: { id, description, title, image, 
  prices, ...rest } }) {
  //...
  //later in the component
  <ItemModal item={{ id, description, title, image, 
    prices, ...rest }} />
```
We can use the named props throughout `GridItem` while passing down `...rest` to a child component. Notice that `item` can be a very complex object in the parent component that contains `GridItem`, but its details are hidden in that parent:

```jsx
<GridItem item={tea} />
```

## Example: take in the prop as is, "unpack" it later

`forwardRef` was giving my linter a headache, so this is a way of delaying the unpacking of props until a little bit later in the component definition itself:

```jsx
const ItemModal = forwardRef((props, ref) => {
  ...
  //destructure here
  const { item } = props
  const { id, description, title, image, 
    prices, ...rest } = item
```

## Example: destructuring props with forwardRef
Not to worry, this is how you would _actually_ unpack props when your component is wrapped inside a `forwardRef`:

```jsx
const CreateTeaButton = React.forwardRef(({ onClick, href, 
  children, ...rest }, ref) => {
    ...
```

tldr; there are many interesting ways of unpacking React props via destructuring.