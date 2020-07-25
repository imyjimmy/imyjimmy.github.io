import Typography from "typography";
import SutroTheme from "typography-theme-sutro";

delete SutroTheme.googleFonts;

SutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1 / 2),
  },
  h1: {
    fontWeight: 700,
  },
  html: {
    overflowY: 'initial',
  }
});
SutroTheme.scaleRatio = 5 / 2;

const typography = new Typography(SutroTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
