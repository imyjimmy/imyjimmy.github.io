import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// okaidia, atomDark, tomorrow, cb, darcula, pojoaque
// base16AteliersulphurpoolLight has cool font
import { tomorrow, base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'; //<- doesnt work
import { LayoutTheme as Layout } from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";

import styled from 'styled-components';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language} style={tomorrow}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => {
  console.log('image src:', src);
  return (
    <Image
      alt={alt}
      src={require(`../../content/assets/${src}`)}
      previewSrc={require(`../../content/assets/${src}?lqip`)}
    // className="w-full"
    />
  )
};

const BlogP = styled.div`
  font-family: ${ props => props.theme.div.fonts.join(',')};
  font-size: ${ props => props.theme.fontSize.medium}; //
`;

const Text = ({ props, children }) => {
  console.log('text', props, children)
  return (<BlogP>{children}</BlogP>)
}

const Container = styled.div`
  margin: 5% 10% 0;
  position: fixed;
`;

const BlogH1 = styled.h1`
  font-size: 2.2rem;
  font-family: ${ props => props.theme.fonts[1]};
  font-weight: 600;
`;

const Time = styled.p`
  font-family: ${ props => props.theme.div.fonts.join(',')};
  font-size: ${ props => props.theme.fontSize.small};
`;

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <Container>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <BlogH1 className="my-0">{frontmatter.title}</BlogH1>
            <Time className="text-xs">{frontmatter.date}</Time>
          </header>
          <ReactMarkdown
            escapeHtml={false}
            source={post.content}
            renderers={{ text: Text, code: CodeBlock, image: MarkdownImage }}
          />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
