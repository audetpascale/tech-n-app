/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Heading, jsx, Text } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  // backgroundImage: `url(${post.frontmatter.image.childImageSharp.fluid.src})`,
  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <Container>
        <Heading
          as="h2"
          sx={{
            backgroundPosition: "center",
          }}
        >
          {post.frontmatter.title}
        </Heading>
        <Heading as="h3">{post.frontmatter.description}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
