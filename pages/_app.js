import "typeface-open-sans";
import "typeface-merriweather";
import 'typeface-cantata-one';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

//font awesome
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/pro-solid-svg-icons';

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
console.log(faLinkedinIn);
library.add(
  faGithub, faAngleDown, faTwitter, faLinkedinIn
);

export default function MyApp({ Component, pageProps }) {
  console.log(Component)
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>);
}