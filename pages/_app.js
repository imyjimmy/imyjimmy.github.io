// import React, { Component } from "react";

import "typeface-open-sans";
import "typeface-merriweather";
import 'typeface-cantata-one';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>);
}