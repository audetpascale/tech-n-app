/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, Image, jsx, Text } from "theme-ui";
import { getSrc } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={getSrc(post.frontmatter.image.childImageSharp.gatsbyImageData)}
      ogType="article:author"
    >
      <Container variant="main">
        <Image
          src={getSrc(post.frontmatter.image.childImageSharp.gatsbyImageData)}
          variant="heading"
          sx={{ objectPosition: "bottom" }}
        />
        <Heading as="h2">{post.frontmatter.title}</Heading>
        <Heading as="h3">{data.site.siteMetadata.author}</Heading>
        <Heading as="h4">{post.frontmatter.description}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
