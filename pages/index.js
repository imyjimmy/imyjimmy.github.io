import Link from "next/link";

import Layout from "components/Layout";
import IntroBio from "components/IntroBio";
import SEO from "components/Seo";
import Footer from "components/Footer";
import { getSortedPosts } from "utils/posts";

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs';

import StyledLink from 'styles/StyledLink';

const theme = {
  textColor: '#EEE',
  fontFamily: 'Cantata One',
  backgroundColor: '#1E1E1E'
}

const LayoutTheme = styled(Layout)`
  background-color: ${ props => props.theme.backgroundColor};
  color: ${ props => props.theme.textColor};
  font-family: ${ props => props.theme.fontFamily};
`;

// const StyledLink = styled.a`
//   color: ${ props => props.theme.textColor};
// `;

export default function Home({ posts }) {
  return (
    <ThemeProvider theme={theme} >
      <LayoutTheme>
        <SEO title="All posts" />
        <Parallax pages={3} scrolling={true}>
          <ParallaxLayer offset={0}>
            <IntroBio />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            {posts.map(({ frontmatter: { title, description, date }, slug }) => (
              <article key={slug}>
                <header>
                  <h3 className="mb-2">
                    <Link href={"/post/[slug]"} as={`/ post / ${slug} `}>
                      <a className="text-3xl text-orange-600 no-underline">{title}</a>
                    </Link>
                  </h3>
                  <span className="mb-4 text-xs">{date}</span>
                </header>
                <section>
                  <p className="mb-8">{description}</p>
                </section>
              </article>
            ))}
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </LayoutTheme>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
