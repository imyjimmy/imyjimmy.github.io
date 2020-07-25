import "typeface-open-sans";
import "typeface-merriweather";
import 'typeface-cantata-one';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

export default function MyApp({ Component, pageProps }) {
  console.log(Component)
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>);
}
