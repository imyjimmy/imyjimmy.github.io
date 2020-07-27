import Link from "next/link";

import { Layout, LayoutTheme } from "components/Layout";
import IntroBio from "components/IntroBio";
import SEO from "components/Seo";
import Footer from "components/Footer";
import { getSortedPosts } from "utils/posts";

import styled from 'styled-components';

import StyledLink from 'styles/StyledLink';
import { Parallax, ParallaxLayer } from 'styles/StyledParallax'; //overrides of Parallax from 'react-spring/addons.cjs';

const BlogPreviewDate = styled.span`
  font-family: ${ props => props.theme.div.fonts.join(',')};
  font-size: ${ props => props.theme.fontSize.small};
`;

const BlogPreviewDescription = styled.p`
  font-family: ${ props => props.theme.div.fonts.join(',')};
  font-size: ${ props => props.theme.fontSize.medium};
`;

export default function Home({ posts }) {
  return (
    <LayoutTheme>
      <SEO title="All posts" />
      <Parallax pages={3} scrolling={true}>
        <ParallaxLayer offset={0}>
          <IntroBio />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          {posts.length > 0 ? posts.map(({ frontmatter: { title, description, date }, slug }) => (
            <article key={slug}>
              <header>
                <h3 className="mb-2">
                  <Link href={"/post/[slug]"} as={`/post/${slug}`} passHref>
                    {/* Styled Link: https://github.com/vercel/next.js/issues/1942#issuecomment-325940359 */}
                    <StyledLink className="text-3xl text-orange-600 no-underline">{title}</StyledLink>
                  </Link>
                </h3>
                <BlogPreviewDate>{date}</BlogPreviewDate>
              </header>
              <section>
                <BlogPreviewDescription>{description}</BlogPreviewDescription>
              </section>
            </article>
          )) : <div></div>}
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </LayoutTheme>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  console.log('posts:', posts);
  return {
    props: {
      posts,
    },
  };
}
