import Document, { Head, Main, NextScript, Html } from "next/document";
import { TypographyStyle } from "react-typography";
import { ServerStyleSheet } from 'styled-components';

import typography from "utils/typography";
import { getSiteMetaData } from "utils/helpers";

import styled from 'styled-components'

const Body = styled.body`
  overflow-x: hidden;
`

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();

    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <style>{`
          #__next { background-color: #1E1E1E; height: 100vh;} 
          html { background-color: #1E1E1E; }
          body {
            overflow-x: hidden;
          }
          `}</style>
          <TypographyStyle typography={typography} />
        </Head>
        <body>
          {/* <style>{``}</style> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
