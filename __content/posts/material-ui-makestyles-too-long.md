---
title: Shorten Your MakeStyles Theme Definition in Material-UI
description: Define your styles in a separate file if they get too long
date: 2020-09-27T11:00:00.000Z
---

# Problem

Let's say you start using [makeStyles](https://material-ui.com/styles/basics/#hook-api) but your stylesheet gets way too long:

```jsx
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fbDiv: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  ...
  //even more styles, very scroll 😳
}))
```

Your component is hundreds of lines long and it takes a while to scroll to the top of it, for example when you want to verify that you've imported certain components, which are usually at the very top of your file.

# Solution

Put all your styles in a separate file:

```jsx 
import { makeStyles } from '@material-ui/styles'
import teaStyles from './tea-styles'

const useStyles = makeStyles(theme => ({
  ...teaStyles(theme),
}))
```

Invoke `useStyles` as you normally would:

```jsx
const TeaMenu = () => {
  const classes = useStyles()
  ...
```

The contents of `tea-styles.js`:

```jsx
export default theme => ({
  teaMenu: {
    width: '200px',
    fontSize: '1.2rem',
  },
  teaItem: {
    '&:focus,&:hover,&:visited,&:active': {
      transform: `scale(1.05)`,
    }
  }
  ...
  // your other styles
})
```

